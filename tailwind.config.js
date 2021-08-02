const plugin = require('tailwindcss/plugin');
const typography = require('@tailwindcss/typography');
const form = require('@tailwindcss/forms');

module.exports = {
  purge: {
    content: ['./layouts/**/*.html', './content/**/*.{html,md}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        brand1: '#1B435D',
        brand2: '#78BBE6',
        brand3: '#D5EEFF',
        brand4: '#FF895D',
        facebook: '#4267B2',
        github: '#333333',
        gitlab: '#FCA326',
        linkedin: '#2867B2',
        telegram: '#0088CC',
        twitter: '#1DA1F2',
        whatsapp: '#25D366',
      },
      backgroundSize: (theme) => ({
        'full-1': `100% ${theme('spacing.1')}`,
        'full-9/20': '100% 45%',
      }),
      backgroundPosition: {
        'bottom-9/10': '0 90%',
      },
      typography: {
        DEFAULT: {
          css: {
            '@apply text-current': {},
            a: {
              '@apply link': {},
            },
            'h1, h2, h3, h4, h5, h6, blockquote': {
              '@apply text-current': {},
            },
            blockquote: {
              '@apply opacity-75': {},
            },
            ol: {
              '>': {
                li: {
                  '&::before': {
                    '@apply text-current opacity-80': {},
                  },
                },
              },
            },
            '.prose': {
              '&__m-0': {
                '*': {
                  '@apply m-0': {},
                },
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      order: ['odd', 'even'],
      filter: ['hover', 'group-hover'],
      grayscale: ['hover'],
      hueRotate: ['hover', 'group-hover'],
      borderWidth: ['dark'],
      backgroundImage: ['dark'],
      backgroundSize: ['hover', 'dark'],
      backgroundPosition: ['hover', 'dark'],
    },
  },
  plugins: [
    plugin(({ addBase, addComponents }) => {
      addBase({
        mark: {
          '@apply bg-transparent bg-gradient-to-r from-brand3 to-brand2': {},
          '@apply dark:from-brand2 dark:to-brand1 bg-no-repeat': {},
          '@apply bg-full-9/20 bg-bottom-9/10 text-current p-0.5': {},
        },
      });

      addComponents({
        '.scroll-smoth': {
          scrollBehavior: 'smooth',
        },
        '.link': {
          '@apply bg-gradient-to-r from-brand2 to-brand3 bg-no-repeat': {},
          '@apply dark:to-brand1 bg-full-1 hover:bg-full-9/20 bg-bottom': {},
          '@apply hover:bg-bottom-9/10 dark:text-current duration-100': {},
          '@apply delay-75 ease-in no-underline': {},
        },
        '#TableOfContents': {
          '@apply text-gray-500 dark:text-gray-200 md:ml-1 md:pl-1': {},
          '@apply md:border-l dark:border-gray-400': {},
          ul: {
            '@apply ml-2 md:ml-3': {},
          },
          a: {
            '@apply hover:text-brand4 opacity-75 hover:opacity-100': {},
            '@apply duration-200': {},
          },
        },
      });
    }),
    typography,
    form,
  ],
};

const plugin = require('tailwindcss/plugin');
const nord = require('tailwind-nord');
const typography = require('@tailwindcss/typography');
const form = require('@tailwindcss/forms');

module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
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
        github: '#333333',
        gitlab: '#FCA326',
        facebook: '#4267B2',
        linkedin: '#2867B2',
        telegram: '#0088CC',
        twitter: '#1DA1F2',
        whatsapp: '#25D366',
      },
      typography: {
        DEFAULT: {
          css: {
            '@apply text-current': {},
            a: {
              '@apply link no-underline': {},
              '&:hover': {
                '@apply text-current no-underline': {},
              },
            },
            'h1, h2, h3, h4, h5, h6, blockquote': {
              '@apply text-current': {},
            },
            blockquote: {
              '@apply opacity-75': {},
            },
            '.reset': {
              a: {
                '@apply text-current bg-none no-underline': {},
              },
              'h1, h2, h3, h4, h5, h6': {
                '@apply m-0': {},
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
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, theme }) => {
      addBase({
        mark: {
          background: `linear-gradient(120deg, ${theme(
            'colors.nord7',
          )} 0%, ${theme('colors.nord9')} 100%)`,
          backgroundSize: '100% 45%',
          backgroundPosition: '0 90%',
          '@apply bg-no-repeat text-nord1 dark:text-white p-1': {},
        },
      });

      addComponents({
        '.scroll-smoth': {
          scrollBehavior: 'smooth',
        },
        '.link': {
          '@apply bg-no-repeat text-nord8 transition-all duration-100 delay-75 ease-in':
            {},
          backgroundImage: `linear-gradient(120deg, ${theme(
            'colors.nord7',
          )}, ${theme('colors.nord9')})`,
          backgroundPosition: '0% 100%',
          backgroundSize: '100% 3px',
          '&:hover': {
            '@apply text-nord3 dark:text-nord6 transition-all duration-100 delay-75 ease-in':
              {},
            backgroundSize: '100% 45%',
            backgroundPosition: '0% 90%',
          },
        },
        '#TableOfContents': {
          '@apply text-nord3 dark:text-nord5 md:ml-1 md:pl-1 md:border-l dark:border-nord3':
            {},
          ul: {
            '@apply ml-2 md:ml-3': {},
          },
          a: {
            '@apply opacity-75 duration-200': {},
            '&:hover': {
              '@apply opacity-100 text-nord8': {},
            },
          },
        },
      });
    }),
    nord,
    typography,
    form,
  ],
};

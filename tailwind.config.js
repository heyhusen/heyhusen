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
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        linkedin: '#2867B2',
        github: '#333333',
        gitlab: '#FCA326',
        twitter: '#1DA1F2',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              '@apply link no-underline': {},
              '&:hover': {
                '@apply no-underline': {},
                color: 'inherit',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'inherit',
            },
            '.reset': {
              a: {
                '@apply no-underline bg-none': {},
                color: 'inherit',
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
      hueRotate: ['hover', 'group-hover'],
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
          '@apply bg-no-repeat text-nord1 p-1': {},
        },
      });

      addComponents({
        '.link': {
          '@apply bg-no-repeat text-nord8 transition-all duration-100 delay-75 ease-in':
            {},
          backgroundImage: `linear-gradient(120deg, ${theme(
            'colors.nord7',
          )}, ${theme('colors.nord9')})`,
          backgroundPosition: '0% 100%',
          backgroundSize: '100% 3px',

          '&:hover': {
            '@apply text-nord3 transition-all duration-100 delay-75 ease-in':
              {},
            backgroundSize: '100% 45%',
            backgroundPosition: '0% 90%',
          },
        },
      });
    }),
    nord,
    typography,
    form,
  ],
};

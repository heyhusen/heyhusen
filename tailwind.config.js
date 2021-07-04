const nord = require('tailwind-nord');
const typography = require('@tailwindcss/typography');

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
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              color: 'inherit',
              '@apply underline transition duration-200 ease-in-out transform':
                {},
              '&:hover': {
                color: 'inherit',
                '@apply -translate-y-1': {},
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [nord, typography],
};

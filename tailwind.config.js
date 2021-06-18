const defaultTheme = require('tailwindcss/defaultTheme');
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
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [nord, typography],
};

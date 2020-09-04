const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Petrona', 'serif'],
      mono: ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#273c75',
        secondary: '#EA2027',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      const buttons = {
        '.navbar .btn': {
          '@apply rounded-full py-1 px-3 text-gray-300': {},
          '&:hover': {
            '@apply bg-gray-300 text-gray-900': {},
          },
        },
      }

      addComponents(buttons)
    }),
  ],
}

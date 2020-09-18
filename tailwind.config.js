const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Petrona', 'serif'],
      mono: ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: {
          50: '#F6F5FF',
          100: '#EDEAFE',
          200: '#D1CBFD',
          300: '#B6ACFC',
          400: '#7F6DF9',
          500: '#482FF7',
          600: '#412ADE',
          700: '#2B1C94',
          800: '#20156F',
          900: '#160E4A',
        },
        secondary: {
          50: '#F5F8FD',
          100: '#EAF0FC',
          200: '#CBDAF7',
          300: '#ABC4F2',
          400: '#6C98E9',
          500: '#2D6CDF',
          600: '#2961C9',
          700: '#1B4186',
          800: '#143164',
          900: '#0E2043',
        },
        tertiary: {
          50: '#F6FCFD',
          100: '#EDF9FB',
          200: '#D1F0F6',
          300: '#B5E7F1',
          400: '#7ED5E6',
          500: '#46C3DB',
          600: '#3FB0C5',
          700: '#2A7583',
          800: '#205863',
          900: '#153B42',
        },
        quaternary: {
          50: '#FEFEF8',
          100: '#FEFEF0',
          200: '#FCFCDA',
          300: '#FAF9C3',
          400: '#F7F596',
          500: '#F3F169',
          600: '#DBD95F',
          700: '#92913F',
          800: '#6D6C2F',
          900: '#494820',
        },
        coffe: '#6F4E37',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        128: '32rem',
      },
    },
    typography: {
      default: {
        css: {
          color: 'inherit',
          a: {
            color: 'inherit',
            '@apply underline transition duration-200 ease-in-out transform': {},
            '&:hover': {
              color: 'inherit',
              '@apply -translate-y-1': {},
            },
          },
          'h1, h2, h3, h4, h5, h6': {
            color: 'inherit',
          },
          '.custom h1, .custom h2, .custom h3, .custom h4, .custom h5, .custom h6, .custom p': {
            '@apply m-1 p-0': {},
          },
          '.custom a': {
            '@apply no-underline': {},
          },
        },
      },
    },
    textIndent: (theme, { negative }) => ({
      ...{
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      },
      ...negative({
        sm: '2rem',
        d: '3rem',
        lg: '4rem',
      }),
    }),
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textIndent: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    gridColumn: ['responsive', 'hover', 'first'],
    flexDirection: ['responsive', 'hover', 'focus', 'first'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    animation: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-text-indent')(),
    plugin(function ({ addBase }) {
      addBase()
    }),
    plugin(function ({ addComponents }) {
      const spacings = {
        '.py-64-auto': {
          padding: 'calc(50% - 16rem) 0',
        },
      }

      addComponents(spacings)
    }),
  ],
}

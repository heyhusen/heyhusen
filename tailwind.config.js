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
          100: '#ECECF2',
          200: '#CFCFDE',
          300: '#B3B3CA',
          400: '#7979A2',
          500: '#40407A',
          600: '#3A3A6E',
          700: '#262649',
          800: '#1D1D37',
          900: '#131325',
        },
        secondary: {
          100: '#FFFEE6',
          200: '#FFFCBF',
          300: '#FFFA99',
          400: '#FFF64D',
          500: '#FFF200',
          600: '#E6DA00',
          700: '#999100',
          800: '#736D00',
          900: '#4D4900',
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
            padding: 0,
            margin: 0,
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
      addBase({
        a: {
          '@apply transition duration-200 ease-in-out transform': {},
          '&:hover': {
            '@apply -translate-y-1': {},
          },
        },
      })
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

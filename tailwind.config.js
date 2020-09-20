const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Petrona', 'serif'],
      mono: ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: {
          50: '#F4F7FA',
          100: '#E9EEF5',
          200: '#C8D5E6',
          300: '#A7BBD7',
          400: '#6488BA',
          500: '#22559C',
          600: '#1F4D8C',
          700: '#14335E',
          800: '#0F2646',
          900: '#0A1A2F',
        },
        secondary: {
          50: '#FEF8F8',
          100: '#FEF1F1',
          200: '#FCDCDB',
          300: '#FAC7C6',
          400: '#F69D9B',
          500: '#F27370',
          600: '#DA6865',
          700: '#914543',
          800: '#6D3432',
          900: '#492322',
        },
        tertiary: {
          50: '#FFFAF7',
          100: '#FFF5EE',
          200: '#FEE5D5',
          300: '#FDD6BB',
          400: '#FCB789',
          500: '#FA9856',
          600: '#E1894D',
          700: '#965B34',
          800: '#714427',
          900: '#4B2E1A',
        },
        quaternary: {
          50: '#FEFEF7',
          100: '#FDFDEF',
          200: '#FBF9D8',
          300: '#F8F6C0',
          400: '#F2EF91',
          500: '#EDE862',
          600: '#D5D158',
          700: '#8E8B3B',
          800: '#6B682C',
          900: '#47461D',
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

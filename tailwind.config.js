const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  plugins: [],
  purge: ['./components/*.tsx', './pages/**/*.tsx'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
}

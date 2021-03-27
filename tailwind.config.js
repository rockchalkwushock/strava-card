const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
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

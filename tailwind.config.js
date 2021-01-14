const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      alignItems: ['hover', 'focus'],
      transformOrigin: {
                '24': '6rem',
               'full': '100%',
      }
    },
    colors: {
      ...colors,
      'bg-green': '#6AA84F'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],


}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Caveat'],
     },
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#00303f',
        'card': '#5bb0ca'
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

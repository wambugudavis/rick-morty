module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'rm-gray': '#F2F3F7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

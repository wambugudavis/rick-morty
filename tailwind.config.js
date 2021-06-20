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
    extend: {
      height: ['hover', 'focus', 'group-hover'],
      width: ['hover', 'focus', 'group-hover'],
      margin: ['hover', 'focus', 'group-hover'],
      padding: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'sm':'640px',
        'md':'767px',
        'lg':'1024px',
        'exl':"1280px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

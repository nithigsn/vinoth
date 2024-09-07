module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{

        'lw':'350px',
        'sm':'620px',
        'md':'767px',
        'lg':'1024px',
        'exl':"1580px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

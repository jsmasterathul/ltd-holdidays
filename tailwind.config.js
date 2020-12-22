module.exports = {
  purge: [
     // Use *.tsx if using TypeScript
     './pages/**/*.js',
     './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme =>({
        "home1" : "url('/images/home1.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

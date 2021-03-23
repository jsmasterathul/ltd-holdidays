const colors = require("tailwindcss/colors");
const themeColors = require("./theme/theme");

module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home1: "url('/images/home1.png')",
      }),
      colors: {
        primary: themeColors.colors.primary.main,
        secondary: themeColors.colors.secondary.main,
      },
      fontFamily: {
        cursive: `Qwigley , cursive`,
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out",
        slideOut: "slideOut 0.5s ease-in-out",
      },
      keyframes: {
        slideIn: {
          "0%": {
            maxHeight: "0px",
          },
          "50%": {
            maxHeight: "50vh",
          },
          "100%": {
            maxHeight: "100vh",
          },
        },
        slideOut: {
          "0%": {
            height: "100vh",
          },
          "100%": {
            height: "0px",
          },
        },
      },
    },
  },

  colors: {
    transparent: "transparent",
    current: "currentColor",

    black: colors.black,
    white: colors.white,
    gray: colors.coolGray,
    red: colors.red,
    yellow: colors.amber,
    green: colors.emerald,
    blue: colors.blue,
    indigo: colors.indigo,
    purple: colors.violet,
    pink: colors.pink,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

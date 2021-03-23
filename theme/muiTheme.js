import { createMuiTheme } from "@material-ui/core/styles";
const themeColors = require("./theme");

const palette = {
  //contrastText gives colot of the text when background filled with primary or secondary color
  primary: { main: themeColors.colors.primary.main, contrastText: "#FFFFFF" },
  secondary: {
    main: themeColors.colors.secondary.main,
    light: themeColors.colors.secondary.main,
    contrastText: "#FFFFFF",
  },

  text: {
    primary: "#001847",
    secondary: "#A7A7A7",
    // disabled: "#6c757d",
  },
};

const typography = {
  useNextVariants: true,
  body1: {
    fontSize: "16px",
    "@media (max-width:960px)": {
      fontSize: "15px",
    },
    "@media (max-width:600px)": {
      fontSize: "14px",
    },
  },
  body2: {
    fontSize: "14px",
    "@media (max-width:960px)": {
      fontSize: "13px",
    },
    "@media (max-width:600px)": {
      fontSize: "12px",
    },
  },
  // Use the system font instead of the default Roboto font.
//   fontFamily: "Rubik",
  button: {
    textTransform: "capitalize",
  },
};
// const themeName = "Tower Gray Fruit Salad Guinea";

export default createMuiTheme({ palette, typography });

// export const redTheme = createMuiTheme({
//   palette: { primary: { main: "#FF0000" } },
//   typography: {
//     fontFamily: "Rubik",

//     button: {
//       textTransform: "capitalize",
//     },
//   },
// });

// export const orangeTheme = createMuiTheme({
//   palette: { primary: { main: "#ff9800" } },
// });

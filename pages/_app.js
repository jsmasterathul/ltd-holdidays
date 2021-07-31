import "../styles/globals.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import muiTheme from "../theme/muiTheme";

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;

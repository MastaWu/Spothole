import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6d6d6d",
      main: "#424242",
      dark: "#1b1b1b",
      contrastText: "#fff"
    },
    secondary: {
      light: "#5e92f3",
      main: "#1565c0",
      dark: "#003c8f",
      constrastText: "#fff"
    }
  }
});

const MaterialUIWrapper = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<MaterialUIWrapper />, document.getElementById("root"));
registerServiceWorker();

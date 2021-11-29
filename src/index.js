import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";

import "./index.css";
import App from "./App";
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import { Outlet } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Container } from "@mui/material";

import Header from "./components/Header/Header";
import { withDevCycleProvider } from "@devcycle/react-client-sdk";

const theme = createTheme({
  palette: {},
  components: {},
});

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <Header />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default withDevCycleProvider({
  sdkKey: process.env.REACT_APP_DEV_SDK_KEY,
})(App);

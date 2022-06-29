import React from "react";
import ReactDOM from "react-dom/client";

import { generateTheme, ThemeProvider } from "./assets/theme";
import { LoginScreen } from "./pages/LoginScreen";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./assets/theme/global";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = generateTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <LoginScreen />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";

import { generateTheme, ThemeProvider } from "./assets/theme";
import { LoginScreen } from "./pages/LoginScreen";
import { MenuScreen } from "./pages/MenuScreen";

import { Layout } from "./components/Layout";
import { GlobalStyle } from "./assets/theme/global";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./pages/ProtectedRoutes/ProtectedRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = generateTheme();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginScreen />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/menu" element={<MenuScreen />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

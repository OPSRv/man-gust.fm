import { setupListeners } from "@reduxjs/toolkit/dist/query";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/general.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { store } from "./store/store";
import { GlobalStyle } from "./_GlobalStyle";

const root = createRoot(document.getElementById("root"));

setupListeners(store.dispatch);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> <GlobalStyle />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

//styled
import "./assets/css/general.css";
import { GlobalStyle } from "./_GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <App /> <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

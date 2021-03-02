import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {GlobalStyles} from './styles/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles>
      <App />
      </GlobalStyles>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

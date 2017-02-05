/* Entry Point to the App */

import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./Components/AppRoutes.js";

import "./scss/style.scss";

window.onload = () => {
  ReactDOM.render(
    <AppRoutes />,
    document.getElementById("main")
  );
};
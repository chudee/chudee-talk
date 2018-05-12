import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import baseStyles from "./styles";

const render = () => {
  baseStyles();
  ReactDom.render(<App />, document.getElementById("root"));
};

render();

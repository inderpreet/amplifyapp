import React from "react";
import ReactDOM from "react-dom";
import "./custom.scss";
import FunctionTest from "./FunctionTest";
import ClassTest from "./ClassTest"

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*  <FunctionTest/>*/}
      <ClassTest />
  </React.StrictMode>,
  document.getElementById("root")
);

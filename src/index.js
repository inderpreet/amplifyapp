import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./custom.scss";
import ClassTest from "./ClassTest";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      <ClassTest />
  </React.StrictMode>,
  document.getElementById("root")
);

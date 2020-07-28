import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./app/MainApp";

ReactDOM.render(
    <MainApp />,
    document.getElementById("app")
);

module.hot.accept();
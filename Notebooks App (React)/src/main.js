//Entry Point for Webpack

import React from "react";
import ReactDOM from "react-dom";
import GistApp from "./app/GistApp.app";

ReactDOM.render(
    <GistApp/>, 
    document.getElementById("app"));

module.hot.accept();
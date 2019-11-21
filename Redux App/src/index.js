//Entry Point for Webpack

import React from "react";
import ReactDOM from "react-dom";
import ItemsApp from "./app/ItemsApp.app";
import { Provider } from 'react-redux';
import ItemStore from './appRedux/ItemStore';


ReactDOM.render(
    <Provider store={ItemStore}>
        <ItemsApp/>
    </Provider>, 
    document.getElementById("app"));

module.hot.accept();
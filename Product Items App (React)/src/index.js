//Entry Point for Webpack

import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./app/MainApp.app";

import { Provider } from 'react-redux';
import configureAppStore from "./appRedux/store";

import { initialState } from "./appRedux/modules/items/reducers";

const store = configureAppStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <MainApp/>
    </Provider>,
    document.getElementById("app")
);

module.hot.accept();
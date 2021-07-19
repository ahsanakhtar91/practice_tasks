import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import UsersStore from "./redux/store/store";
import 'antd/dist/antd.css';
import "./scss/main.scss";

ReactDOM.render(
    <Provider store={UsersStore}>
        <App />
    </Provider>,
    document.getElementById('app-root')
);
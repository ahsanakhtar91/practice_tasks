import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'antd/dist/antd.css';
import "./scss/main.scss";
import App from './app/App';
import { Provider } from 'react-redux';
import UsersStore from "./redux/store/store";

ReactDOM.render(
    <Provider store={UsersStore}>
        <App />
    </Provider>,
    document.getElementById('app-root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import clientsStore from "./redux/store/store";
import 'antd/dist/antd.css';
import "./scss/main.scss";

ReactDOM.render(
    <Provider store={clientsStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app-root')
);
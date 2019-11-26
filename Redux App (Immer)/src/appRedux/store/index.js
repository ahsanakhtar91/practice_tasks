import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AllReducers, { rootSaga } from "../modules";


const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(initialState) {
    
    const AppStore = createStore(
        AllReducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return AppStore;
}
//Code for Store creation and Middleware binding can be moved to "src/index.js"

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ItemReducer } from '../reducers/ItemReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const ItemStore = createStore(
    ItemReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default ItemStore;
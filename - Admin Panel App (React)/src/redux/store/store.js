import { createStore } from 'redux';

import { clientsReducer } from '../reducers/clientsReducer';

const store = createStore(
    clientsReducer,
    window?.__REDUX_DEVTOOLS_EXTENSION__?.()
);

export default store;
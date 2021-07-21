import { createStore } from 'redux';

import { usersReducer } from '../reducers/usersReducer';

const store = createStore(
    usersReducer
);

export default store;
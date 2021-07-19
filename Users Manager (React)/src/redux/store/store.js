import { createStore } from 'redux';

import { UsersReducer } from '../reducers/UsersReducer';

const UsersStore = createStore(
    UsersReducer
);

export default UsersStore;
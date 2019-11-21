import { createStore } from 'redux';
import { ItemReducer } from './reducers/ItemReducer';

const ItemStore = createStore(ItemReducer);

export default ItemStore;
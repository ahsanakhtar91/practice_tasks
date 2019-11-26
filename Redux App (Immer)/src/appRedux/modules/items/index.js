import { initialState, ItemReducerImmer } from "./reducers";
import itemSagas from "./sagas";

import { createActionCreators, createReducerFunction } from "immer-reducer";


const itemActionCreators = createActionCreators(ItemReducerImmer);

const itemReducer = createReducerFunction(ItemReducerImmer, initialState);


export { itemActionCreators, itemSagas };

export default itemReducer;
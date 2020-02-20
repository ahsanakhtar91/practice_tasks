import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import itemReducer, { itemSagas } from "./items";

export function* rootSaga() {
    yield all([
        itemSagas()
    ]);
}
  
const AllReducers = combineReducers({
    products: itemReducer
});
  
export default AllReducers;
import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import itemReducer, { itemSagas } from "./items";

export function* rootSaga() {
    yield all([
        itemSagas(),
        //Other Module's Sagas...
    ]);
}
  
const AllReducers = combineReducers({
    items: itemReducer
    //Other Module's Reducers...
});
  
export default AllReducers;
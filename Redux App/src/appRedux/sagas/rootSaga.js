import { all } from "redux-saga/effects";
import ItemSagas from "./items";

export default function* rootSaga() {
    yield all([
        ItemSagas()
    ]);
}
//import ActionTypes from "../../actions/actionTypes";
import { delay, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { addItemOnServer, deleteItemOnServer } from "../../../api/dummyAPI";

import { itemActionCreators } from ".";

function* addItemSaga(action)
{
    try {
        const addItemResponse = yield call(addItemOnServer);
        //yield delay(1000);
        yield put(itemActionCreators.addItem(action.payload));
    } catch (exp) {
        console.log(exp.message);
    }
}

function* deleteItemSaga(action)
{
    try {
        const deleteItemResponse = yield call(deleteItemOnServer);
        //yield delay(1000);
        yield put(itemActionCreators.deleteItem(action.payload));
    } catch (exp) {
        console.log(exp.message);
    }
}

export default function* itemSagas()
{
    //By using Latest, items will be added or removed only for the last action (pending ones will all be ignored)
    //Currently using takeEvery, items will be added or removed against all subsequent clicks/actions
    yield takeEvery(itemActionCreators.addItemRequested.type, addItemSaga);
    yield takeEvery(itemActionCreators.deleteItemRequested.type, deleteItemSaga);
}
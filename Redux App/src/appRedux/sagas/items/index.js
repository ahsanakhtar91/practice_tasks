import ActionTypes from "../../actions/actionTypes";
import { delay, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { addItemOnServer, deleteItemOnServer } from "../../../api/dummyAPI";

function* addItemSaga(action)
{
    try {
        const addItemResponse = yield call(addItemOnServer);
        //yield delay(1000);
        yield put({type: ActionTypes.ADD_ITEM, payload: action.payload});
    } catch (exp) {
        console.log(exp.message);
    }
}

function* deleteItemSaga(action)
{
    try {
        const deleteItemResponse = yield call(deleteItemOnServer);
        //yield delay(1000);
        yield put({type: ActionTypes.DELETE_ITEM, payload: action.payload});
    } catch (exp) {
        console.log(exp.message);
    }
}

export default function* ItemSagas()
{
    //By using Latest, items will be added or removed only for the last action (pending ones will all be ignored)
    //Currently using takeEvery, items will be added or removed against all subsequent clicks/actions
    yield takeEvery(ActionTypes.ADD_ITEM_REQUESTED, addItemSaga);
    yield takeEvery(ActionTypes.DELETE_ITEM_REQUESTED, deleteItemSaga);
}
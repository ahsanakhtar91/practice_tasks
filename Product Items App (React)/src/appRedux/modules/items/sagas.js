import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import ActionTypes from "../../actions/actionTypes";
import AppConstants from "../../../constants/appConstants";
import { showFetchedItems } from "../../actions/actionCreators";
import { fetchItemsFromAPI } from "../../../api/APIDataHandler";

function* fetchItemsSaga()
{
    try {
        const fetchedItems = yield call(fetchItemsFromAPI);
        if(fetchedItems)
            fetchedItems.map((item) => {
                item.quantity = AppConstants.defaultItemStock;
                item.visible = true;
                return item;
            });

        yield put(showFetchedItems(fetchedItems));
    } catch (exp) {
        console.log(exp.message);
    }
}

export default function* itemSagas()
{
    //By using Latest, items will be added or removed only for the last action (pending ones will all be ignored)
    //Currently using takeEvery, items will be fetched against all subsequent dispatch of actions
    yield takeEvery(ActionTypes.FETCH_ITEMS_REQUESTED, fetchItemsSaga);
}
import ActionTypes from "../actions/actionTypes";
import { getUsersDataFromLocalStorage, setUsersDataIntoLocalStorage } from "../../common/utils";

const initState = {
    users: [],
    searchText: ""
};

export const UsersReducer = (state = initState, action) => {
    switch (action.type) {

        case ActionTypes.VIEW_ALL_USERS:
            var users = getUsersDataFromLocalStorage(state);
            return {
                ...state,
                users: [...users],
                searchText: ""
            };

        case ActionTypes.VIEW_SEARCHED_USER:
            var users = getUsersDataFromLocalStorage(state);
            return {
                ...state,
                users: [...users],
                searchText: action.payload.searchText
            };

        // case ActionTypes.ADD_USER:
        //     return {
        //         users: [
        //             ...state.users,
        //             {
        //                 name: action.payload.name,
        //                 quantity: action.payload.quantity
        //             }
        //         ]
        //     };

        case ActionTypes.DELETE_USER:
            var users = getUsersDataFromLocalStorage(state);
            users = users.filter((user) => user.id !== action.payload.userID);
            setUsersDataIntoLocalStorage(users);
            return {
                ...state,
                users: [...users]
            };

        default:
            return state;
    }
};
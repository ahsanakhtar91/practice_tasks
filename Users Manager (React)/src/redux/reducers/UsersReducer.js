import ActionTypes from "../actions/actionTypes";
import { createNewUserObj, getUsersDataFromLocalStorage, setUsersDataIntoLocalStorage } from "../../common/utils";

const initState = {
    users: [],
    searchText: ""
};

export const usersReducer = (state = initState, action) => {
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


        case ActionTypes.ADD_NEW_USER:
            var users = getUsersDataFromLocalStorage(state);
            let newUser = createNewUserObj(users);
            newUser.name = action.payload.userData.name;
            newUser.username = action.payload.userData.name.toLowerCase().replace(/\s/gi, "");
            newUser.email = action.payload.userData.email;
            newUser.address.city = action.payload.userData.city;
            newUser.company.name = action.payload.userData.companyName;
            users.push(newUser);
            setUsersDataIntoLocalStorage(users);
            return {
                ...state,
                users: [...users],
                searchText: ""
            };


        case ActionTypes.EDIT_USER:
            var users = getUsersDataFromLocalStorage(state);
            users = users.map((user) => {
                if (user.id === action.payload.userData.id) {
                    let updatedUser = user;
                    updatedUser.name = action.payload.userData.name;
                    updatedUser.username = action.payload.userData.name.toLowerCase().replace(/\s/gi, "");
                    updatedUser.email = action.payload.userData.email;
                    updatedUser.address.city = action.payload.userData.city;
                    updatedUser.company.name = action.payload.userData.companyName;
                    return updatedUser;
                }
                else {
                    return user;
                }
            });
            setUsersDataIntoLocalStorage(users);
            return {
                ...state,
                users: [...users],
                searchText: ""
            };


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
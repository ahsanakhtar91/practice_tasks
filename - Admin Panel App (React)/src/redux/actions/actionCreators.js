import ActionTypes from "./actionTypes";

export const viewAllUsers = () => {
    return {
        type: ActionTypes.VIEW_ALL_USERS,
        payload: {}
    }
};

export const viewSearchedUser = (searchText) => {
    return {
        type: ActionTypes.VIEW_SEARCHED_USER,
        payload: {
            searchText
        }
    }
};

export const addNewUser = (userData) => {
    return {
        type: ActionTypes.ADD_NEW_USER,
        payload: {
            userData
        }
    }
};

export const editClient = (userData) => {
    return {
        type: ActionTypes.EDIT_USER,
        payload: {
            userData
        }
    }
};

export const deleteUser = (userID) => {
    return {
        type: ActionTypes.DELETE_USER,
        payload: {
            userID
        }
    }
};
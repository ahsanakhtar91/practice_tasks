import ActionTypes from "./actionTypes";

export const viewAllUsers = () => {
    return {
        type: ActionTypes.VIEW_ALL_USERS,
        payload: {}
    }
};

export const addUser = (name, quantity) => {
    return {
        type: ActionTypes.ADD_USER,
        payload: {
            name,
            quantity
        }
    }
};

export const deleteUser = (userID) => {
    return {
        type: ActionTypes.DELETE_USER,
        payload: {
            index
        }
    }
};
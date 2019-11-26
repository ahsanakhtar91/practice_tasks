import ActionTypes from "./actionTypes";

export const addItem = (name, quantity) => {
    return {
        type: ActionTypes.ADD_ITEM_REQUESTED,
        payload: {
            name, 
            quantity
        }
    }
}

export const deleteItem = (index) => {
    return {
        type: ActionTypes.DELETE_ITEM_REQUESTED,
        payload: {
            index
        }
    }
}
import ActionTypes from "./actionTypes";

export const addItem = (name, quantity) => {
    return {
        type: ActionTypes.ADD_ITEM ,
        payload: {
            name, 
            quantity
        }
        
    }
}

export const deleteItem = (index) => {
    return {
        type: ActionTypes.DELETE_ITEM,
        payload: {
            index
        }
        
    }
}
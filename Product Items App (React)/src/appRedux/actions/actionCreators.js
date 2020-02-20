import ActionTypes from "./actionTypes";

export const fetchItemsRequested = () => {
    return {
        type: ActionTypes.FETCH_ITEMS_REQUESTED,
        payload: null
    }
}

export const showFetchedItems = (items) => {
    return {
        type: ActionTypes.SHOW_FETCHED_ITEMS,
        payload: items
    }
}

export const filterItems = (colour) => {
    return {
        type: ActionTypes.FILTER_ITEMS,
        payload: {
            colour: colour
        }
    }
}

export const addToCart = (itemId) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            itemId: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            itemId: itemId
        }
    }
}

export const incrementInCart = (itemId) => {
    return {
        type: ActionTypes.INCREMENT_IN_CART,
        payload: {
            itemId: itemId
        }
    }
}

export const decrementFromCart = (itemId) => {
    return {
        type: ActionTypes.DECREMENT_FROM_CART,
        payload: {
            itemId: itemId
        }
    }
}
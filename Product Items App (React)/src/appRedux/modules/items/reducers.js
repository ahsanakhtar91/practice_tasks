import ActionTypes from "../../actions/actionTypes";
import { getItemById, incrementItemToCart, decrementItemFromCart} from "../../../utils/appUtils";

const initialState = {
    allItems: [],
    cartItems: []
};

const ItemReducer = (appState = initialState, action) => {
    switch (action.type) {
        
        case ActionTypes.SHOW_FETCHED_ITEMS:
            
            var newState = { ...appState };
            newState.allItems = action.payload;
            return newState;

        case ActionTypes.FILTER_ITEMS:
            
            var newState = { ...appState };
            newState.allItems = appState.allItems.map((item) => {
                if(action.payload.colour === null || item.colour === action.payload.colour)
                    item.visible = true;
                else
                    item.visible = false;
                return item;
            });
            return newState;

        case ActionTypes.ADD_TO_CART:
            
            var newState = { ...appState };
            return incrementItemToCart(action.payload.itemId, newState);

        case ActionTypes.REMOVE_FROM_CART:
            
            var newState = { ...appState };
            let itemToRemove = getItemById(newState.cartItems, action.payload.itemId);
            let cartQuantity = itemToRemove.quantity;
            newState.cartItems = newState.cartItems.filter((item) => item.id !== action.payload.itemId);
            newState.allItems = newState.allItems.map((item) => {
                if(item.id === action.payload.itemId)
                    item.quantity = item.quantity + cartQuantity;
                return item;
            });
            return newState;

        case ActionTypes.INCREMENT_IN_CART:

            var newState = { ...appState };
            return incrementItemToCart(action.payload.itemId, newState);

        case ActionTypes.DECREMENT_FROM_CART:

            var newState = { ...appState };
            return decrementItemFromCart(action.payload.itemId, newState);

        default:
          return appState;
      }
};


export { initialState, ItemReducer }
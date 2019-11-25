import ActionTypes from "../actions/actionTypes";

export const ItemReducer = (appState = {items: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:

          return {
              items: [
                 ...appState.items,
                 {
                    name: action.payload.name,
                    quantity: action.payload.quantity
                 }
              ]
          }

        case ActionTypes.DELETE_ITEM:

            let newItemsArray = [...appState.items];
            newItemsArray.splice(action.payload.index, 1);
            return {
                items: newItemsArray
            }

        default:
          return appState;
      }
};

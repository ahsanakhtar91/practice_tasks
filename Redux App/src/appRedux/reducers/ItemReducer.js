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
            appState.items.splice(action.payload.index, 1);
            return {
                items: [...appState.items]
            }
        default:
          return appState;
      }
};

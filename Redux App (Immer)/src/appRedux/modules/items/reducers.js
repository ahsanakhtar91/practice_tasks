import { ImmerReducer } from "immer-reducer";

const initialState = { 
    items: []
};

class ItemReducerImmer extends ImmerReducer
{

    addItemRequested(payload) {
    }

    deleteItemRequested(payload) {
    }

    addItem(payload) {
        this.draftState.push({
            name: payload.name,
            quantity: payload.quantity});
    }

    deleteItem(payload) {
        this.draftState.splice(payload.index, 1);
    }
}

export { initialState, ItemReducerImmer }

//old reducer ItemReducer (it can be used instead of ItemReducerImmer)
//--------------------------------------------------------------------
//initialState was defined in the parameter

/*export const ItemReducer = (appState = {items: []}, action) => {
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
};*/

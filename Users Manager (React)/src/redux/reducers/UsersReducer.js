import ActionTypes from "../actions/actionTypes";
import usersMockData from "../../json/usersMockData.json";

const initState = {
    users: []
};

export const UsersReducer = (state = initState, action) => {
    switch (action.type) {

        case ActionTypes.VIEW_ALL_USERS:

            let usersToView = [];
            if (!localStorage.getItem("usersInLocStorage")) {
                usersToView = usersMockData;
                localStorage.setItem("usersInLocStorage", JSON.stringify(usersToView));
            }
            else {
                usersToView = JSON.parse(localStorage.getItem("usersInLocStorage"))
            }

            return {
                users: [
                    ...usersToView
                ]
            }

        case ActionTypes.ADD_ITEM:
            return {
                users: [
                    ...state.users,
                    {
                        name: action.payload.name,
                        quantity: action.payload.quantity
                    }
                ]
            }

        case ActionTypes.DELETE_ITEM:
            let newUsersArray = [...state.users];
            newUsersArray.splice(action.payload.index, 1);
            return {
                items: newUsersArray
            }

        default:
            return state;
    }
};

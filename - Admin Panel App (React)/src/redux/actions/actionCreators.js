import ActionTypes from "./actionTypes";

export const viewAllClients = () => {
    return {
        type: ActionTypes.VIEW_ALL_CLIENTS,
        payload: {}
    }
};

export const viewSearchedClient = (searchText) => {
    return {
        type: ActionTypes.VIEW_SEARCHED_CLIENT,
        payload: {
            searchText
        }
    }
};

export const addNewClient = (clientData) => {
    return {
        type: ActionTypes.ADD_NEW_CLIENT,
        payload: {
            clientData
        }
    }
};

export const editClient = (clientData) => {
    return {
        type: ActionTypes.EDIT_CLIENT,
        payload: {
            clientData
        }
    }
};

export const deleteClient = (clientID) => {
    return {
        type: ActionTypes.DELETE_CLIENT,
        payload: {
            clientID
        }
    }
};
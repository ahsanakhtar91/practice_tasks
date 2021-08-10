import ActionTypes from "../actions/actionTypes";
import { createNewClientObj, getClientsDataFromLocalStorage, setClientsDataIntoLocalStorage } from "../../common/utils";

const initState = {
    clients: [],
    searchText: ""
};

export const clientsReducer = (state = initState, action) => {
    switch (action.type) {


        case ActionTypes.VIEW_ALL_CLIENTS:
            var clients = getClientsDataFromLocalStorage(state);
            return {
                ...state,
                clients: [...clients],
                searchText: ""
            };


        case ActionTypes.VIEW_SEARCHED_CLIENT:
            var clients = getClientsDataFromLocalStorage(state);
            return {
                ...state,
                clients: [...clients],
                searchText: action.payload.searchText
            };


        case ActionTypes.ADD_NEW_CLIENT:
            var clients = getClientsDataFromLocalStorage(state);
            let newClient = createNewClientObj(clients);
            newClient.client.clientName = action.payload.clientData.clientClientName;
            newClient.client.email = action.payload.clientData.clientEmail;
            newClient.client.phone = action.payload.clientData.clientPhone;
            newClient.client.startDate = action.payload.clientData.clientStartDate;
            newClient.client.subscriptionStatus = action.payload.clientData.clientSubscriptionStatus;
            newClient.business.businessType = action.payload.clientData.businessBusinessType;
            newClient.business.legalName = action.payload.clientData.businessLegalName;
            newClient.business.licenseNumber = action.payload.clientData.businessLicenseNumber;
            newClient.business.taxNumber = action.payload.clientData.businessTaxNumber;
            newClient.business.licenseDoc = action.payload.clientData.businessLicenseDoc;
            newClient.business.noOfBranches = action.payload.clientData.businessNoOfBranches;
            newClient.branch.storeName = action.payload.clientData.branchStoreName;
            newClient.branch.address = action.payload.clientData.branchAddress;
            newClient.branch.email = action.payload.clientData.branchEmail;
            newClient.branch.phone = action.payload.clientData.branchPhone;
            clients.push(newClient);
            setClientsDataIntoLocalStorage(clients);
            return {
                ...state,
                clients: [...clients],
                searchText: ""
            };


        case ActionTypes.EDIT_CLIENT:
            var clients = getClientsDataFromLocalStorage(state);
            clients = clients.map((client) => {
                if (client.id === action.payload.clientData.id) {
                    let updatedClient = client;
                    updatedClient.client.clientName = action.payload.clientData.clientClientName;
                    updatedClient.client.email = action.payload.clientData.clientEmail;
                    updatedClient.client.phone = action.payload.clientData.clientPhone;
                    updatedClient.client.startDate = action.payload.clientData.clientStartDate;
                    updatedClient.client.subscriptionStatus = action.payload.clientData.clientSubscriptionStatus;
                    updatedClient.business.businessType = action.payload.clientData.businessBusinessType;
                    updatedClient.business.legalName = action.payload.clientData.businessLegalName;
                    updatedClient.business.licenseNumber = action.payload.clientData.businessLicenseNumber;
                    updatedClient.business.taxNumber = action.payload.clientData.businessTaxNumber;
                    updatedClient.business.licenseDoc = action.payload.clientData.businessLicenseDoc;
                    updatedClient.business.noOfBranches = action.payload.clientData.businessNoOfBranches;
                    updatedClient.branch.storeName = action.payload.clientData.branchStoreName;
                    updatedClient.branch.address = action.payload.clientData.branchAddress;
                    updatedClient.branch.email = action.payload.clientData.branchEmail;
                    updatedClient.branch.phone = action.payload.clientData.branchPhone;
                    return updatedClient;
                }
                else {
                    return client;
                }
            });
            setClientsDataIntoLocalStorage(clients);
            return {
                ...state,
                clients: [...clients],
                searchText: ""
            };


        case ActionTypes.DELETE_CLIENT:
            var clients = getClientsDataFromLocalStorage(state);
            clients = clients.filter((client) => client.id !== action.payload.clientID);
            setClientsDataIntoLocalStorage(clients);
            return {
                ...state,
                clients: [...clients]
            };


        default:
            return state;
    }
};
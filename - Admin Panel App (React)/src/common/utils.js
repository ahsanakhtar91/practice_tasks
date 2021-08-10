import clientsMockData from "../json/clientsMockData.json";

/* 
This function needed to be written separately that gives the full data of clients.
This function is separately written to avoid redundant code of accessing "localStorage" over and over again.
If "localStorage" was never needed to be accessed, then only "clients" array would have been required in the "clientsReducer" (synchronously).
P.S. if the data would have been coming from an API end-point (asynchronously), then either "Thunks" OR "Sagas" should be written as an alternative to this.
*/
export const getClientsDataFromLocalStorage = (storeState) => {
    let allUsers = [];
    if (storeState?.users?.length > 0) {
        allUsers = storeState.users;
    }
    else if (!localStorage.getItem("clientsInLocStorage")) {
        allUsers = clientsMockData;
        localStorage.setItem("clientsInLocStorage", JSON.stringify(allUsers));
    }
    else {
        allUsers = JSON.parse(localStorage.getItem("clientsInLocStorage"));
    }
    return allUsers;
};

/* 
This function needed to be written separately that updates the "locaStorage" from within the Redux store while updating the state.
This function is separately written to avoid redundant code of writing "localStorage" over and over again.
If "localStorage" was never needed to be accessed, then only an API endpoint would have been called.
P.S. if the data would have been sent to an API end-point (asynchronously), then either "Thunks" OR "Sagas" should be written as an alternative to this.
*/
export const setClientsDataIntoLocalStorage = (updatedUsers) => {
    localStorage.setItem("clientsInLocStorage", JSON.stringify(updatedUsers));
};

/*
This is a helper function to sort the clients data in Ascending Order before rendering, by using the "orderByKey" in the params (currently, the value it recieves is "storeName")
If "orderByKey" param is not be provided, then the data will be sorted based on the key "id" (means in the order they were created)
*/
export const sortAscending = (users = [], orderByKey) => {
    return users.sort((prevUser, nextClient) => {
        return (
            (prevUser.branch[orderByKey ?? "id"].toLowerCase() > nextClient.branch[orderByKey ?? "id"].toLowerCase()) ?
                1
                :
                (prevUser.branch[orderByKey ?? "id"].toLowerCase() < nextClient.branch[orderByKey ?? "id"].toLowerCase()) ?
                    -1
                    :
                    0
        )
    });
};

export const createNewUserObj = (existingUsers = []) => ({
    id: generateUniqueUserID(existingUsers),
    name: "",
    username: "",
    email: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: ""
        }
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    }
});

const generateUniqueUserID = (existingUsers) => {
    const maximumIDPresent = (
        existingUsers
            .map((user) => user.id)
            .reduce(((a, b) => a > b ? a : b), 0)
    );
    return (maximumIDPresent ?? 0) + 1;
};

export const camelToTitleCase = (camelCase) => {
    return (
        camelCase
            .replace(/([A-Z])/g, (match) => ` ${match}`)
            .replace(/^./, (match) => match.toUpperCase())
            .trim()
    );
};

export const getNavRouteName = (history = {}) => {
    return (history?.location?.pathname === "/") ? "Clients" : "Clients";
};

export const getUser = (data) => {
    return "Ahsan";
};
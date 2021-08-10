import clientsMockData from "../json/clientsMockData.json";

/* 
This function needed to be written separately that gives the full data of clients.
This function is separately written to avoid redundant code of accessing "localStorage" over and over again.
If "localStorage" was never needed to be accessed, then only "clients" array would have been required in the "clientsReducer" (synchronously).
P.S. if the data would have been coming from an API end-point (asynchronously), then either "Thunks" OR "Sagas" should be written as an alternative to this.
*/
export const getClientsDataFromLocalStorage = (storeState) => {
    let allClients = [];
    if (storeState?.clients?.length > 0) {
        allClients = storeState.clients;
    }
    else if (!localStorage.getItem("clientsInLocStorage")) {
        allClients = clientsMockData;
        localStorage.setItem("clientsInLocStorage", JSON.stringify(allClients));
    }
    else {
        allClients = JSON.parse(localStorage.getItem("clientsInLocStorage"));
    }
    return allClients;
};

/* 
This function needed to be written separately that updates the "locaStorage" from within the Redux store while updating the state.
This function is separately written to avoid redundant code of writing "localStorage" over and over again.
If "localStorage" was never needed to be accessed, then only an API endpoint would have been called.
P.S. if the data would have been sent to an API end-point (asynchronously), then either "Thunks" OR "Sagas" should be written as an alternative to this.
*/
export const setClientsDataIntoLocalStorage = (updatedClients) => {
    localStorage.setItem("clientsInLocStorage", JSON.stringify(updatedClients));
};

/*
This is a helper function to sort the clients data in Ascending Order before rendering, by using the "orderByKey" in the params (currently, the value it recieves is "id")
If "orderByKey" param is not be provided, then the data will be sorted based on the default key "id" (means in the order they were created, by default)
*/
export const sortAscending = (clients = [], orderByKey) => {
    return clients.sort((prevClient, nextClient) => {
        return (
            (prevClient[orderByKey ?? "id"] > nextClient[orderByKey ?? "id"]) ?
                1
                :
                (prevClient[orderByKey ?? "id"] < nextClient[orderByKey ?? "id"]) ?
                    -1
                    :
                    0
        )
    });
};

export const createNewClientObj = (existingClients = []) => ({
    id: generateUniqueClientID(existingClients),
    client: {
        clientName: "",
        email: "",
        phone: "",
        startDate: "",
        subscriptionStatus: ""
    },
    business: {
        businessType: "",
        legalName: "",
        licenseNumber: "",
        taxNumber: "",
        licenseDoc: "",
        noOfBranches: ""
    },
    branch: {
        storeName: "",
        address: "",
        email: "",
        phone: ""
    }
});

const generateUniqueClientID = (existingClients) => {
    const maximumIDPresent = (
        existingClients
            .map((client) => client.id)
            .reduce(((a, b) => a > b ? a : b), 0)
    );
    return (maximumIDPresent ?? 0) + 1;
};

export const camelToTitleCase = (input, omitFirstWord) => {
    const camelCase = input
        .replace(/([A-Z])/g, (match) => ` ${match}`)
        .replace(/^./, (match) => match.toUpperCase())
        .trim();

    return (omitFirstWord) ?
        camelCase.substring(camelCase.indexOf(" ") + 1, camelCase.length)
        :
        camelCase
};

export const flattenObject = (obj) => {
    let toReturn = {};

    for (let i in obj) {
        if (!obj.hasOwnProperty(i)) continue;

        if ((typeof obj[i]) == 'object' && obj[i] !== null) {
            var flatObject = flattenObject(obj[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + "_" + x] = flatObject[x];
            }
        }
        else {
            toReturn[i] = obj[i];
        }
    }
    return toReturn;
};

export const getNavRouteName = (history = {}) => {
    return (history?.location?.pathname === "/") ? "Clients" : "Clients";
};

export const getClient = (data) => {
    return "Ahsan";
};
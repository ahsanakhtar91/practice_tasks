
export function fetchItemsFromAPI()
{
    const productsURL = "https://my-json-server.typicode.com/benirvingplt/products/products";
    
    return fetch(productsURL).then((response) => response.json());
}
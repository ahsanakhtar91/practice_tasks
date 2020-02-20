export const getItemById = (array, id) => {
    return array.filter((item) => item.id === id)[0];
}

export const incrementItemToCart = (itemId, newState) => {

    let itemToAdd = getItemById(newState.allItems, itemId);
    newState.allItems = newState.allItems.map((item) => {
        if(item.id === itemId)
            item.quantity -= 1;
        return item;
    });

    let itemInCart = getItemById(newState.cartItems, itemId);
    if(itemInCart){
        newState.cartItems = newState.cartItems.map((item) => {
            if(item.id === itemId)
                item.quantity += 1;
            return item;
        });
    }
    else{
        newState.cartItems.push({...itemToAdd, quantity: 1});
    }

    return newState; 
}

export const decrementItemFromCart = (itemId, newState) => {

    let itemToAdd = getItemById(newState.allItems, itemId);
    newState.allItems = newState.allItems.map((item) => {
        if(item.id === itemId)
            item.quantity += 1;
        return item;
    });

    let itemInCart = getItemById(newState.cartItems, itemId);
    if(itemInCart){
        newState.cartItems = newState.cartItems.map((item) => {
            if(item.id === itemId)
                item.quantity -= 1;
            return item;
        });
    }
    else{
        newState.cartItems.push({...itemToAdd, quantity: 1});
    }

    return newState; 
}
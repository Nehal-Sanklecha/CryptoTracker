

export const selectedCurrencies = (state = [], action) => {
    switch (action.type) {
        case "SET_SELECTED_CURRENCIES":
            return  action.payload;
            
        case "REMOVE_SELECTED_CURRENCY":
            return  action.payload;
            
    };
    return state
}

export const currencies = (state = {}, action) => {
    switch (action.type) {
        case "SET_CURRENCIES":
            return  action.payload;            
    };
    return state
}
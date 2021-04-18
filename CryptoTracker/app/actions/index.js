export const setSelectedCurrencies = payload => ({
    type: "SET_SELECTED_CURRENCIES",
    payload: payload,
});

export const removeCurrency = payload => ({
    type: "REMOVE_SELECTED_CURRENCY",
    payload: payload,
});

export const addCurrencies = payload => ({
    type: "SET_CURRENCIES",
    payload: payload,
});
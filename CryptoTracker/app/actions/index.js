export const setSelectedCurrencies = payload => ({
    type: "SET_SELECTED_CURRENCIES",
    payload: payload,
});

export const removeCurrency = payload => ({
    type: "REMOVE_SELECTED_CURRENCY",
    payload: payload,
});

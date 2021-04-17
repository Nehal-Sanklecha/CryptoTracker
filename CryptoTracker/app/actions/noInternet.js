export const SET_INTERNET_STATUS = 'noInternet/SET_INTERNET_STATUS';

export const setInternetStatus = status => {
  return { type: SET_INTERNET_STATUS, payload: { status } };
};

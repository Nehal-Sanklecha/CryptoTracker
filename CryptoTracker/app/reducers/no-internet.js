import { SET_INTERNET_STATUS } from '../actions/noInternet.js';

const initialState = {
  status: true,
};

const internetStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTERNET_STATUS: {
      return { ...state, status: action.payload.status };
    }
    default:
      return state;
  }
};

export default internetStatusReducer;
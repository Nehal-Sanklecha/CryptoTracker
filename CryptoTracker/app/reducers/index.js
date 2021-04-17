import { combineReducers } from 'redux';
import internetStatus from '../reducers/no-internet';

const rootReducer = combineReducers({
    internetStatus,
})
export default rootReducer;
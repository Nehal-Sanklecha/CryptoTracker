import { combineReducers } from 'redux';
import internetStatus from '../reducers/no-internet';
import {selectedCurrencies} from '../reducers/currency.reducer'

const rootReducer = combineReducers({
    internetStatus,
    selectedCurrencies,
})
export default rootReducer;
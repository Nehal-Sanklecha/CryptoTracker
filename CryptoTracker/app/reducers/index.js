import { combineReducers } from 'redux';
import internetStatus from '../reducers/no-internet';
import {selectedCurrencies, currencies} from '../reducers/currency.reducer'

const rootReducer = combineReducers({
    internetStatus,
    selectedCurrencies,
    currencies
})
export default rootReducer;
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
let enhancer = null;
const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer)
if (__DEV__ && process.env.NODE_ENV !== 'test') {
    middlewares.push(logger);

    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
    );
} else {
    enhancer = applyMiddleware(...middlewares);
}

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store)
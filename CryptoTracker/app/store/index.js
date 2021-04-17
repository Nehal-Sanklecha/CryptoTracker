import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let enhancer = null;
const middlewares = [thunk];
if (__DEV__ && process.env.NODE_ENV !== 'test') {
    middlewares.push(logger);

    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
              })
            : compose;

    enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    );
} else {
    enhancer = applyMiddleware(...middlewares);
}

export const store = createStore(rootReducer, enhancer);

export const testStore = initialState => createStore(rootReducer, initialState, enhancer);

import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// Get all reducers
import * as reducers from './reducers';

// Construct our Redux store;
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// Export the redux store
export default store;
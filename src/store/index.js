import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

let middlewares = []

if(process.env.NODE_ENV === 'development') {
 middlewares.push(logger);
}

const store = createStore(
 rootReducer,
 applyMiddleware(...middlewares)
);

export default store;
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas/index';

const logger = createLogger();
const saga = createSagaMiddleware();

let middlewares = [saga]

if(process.env.NODE_ENV === 'development') {
 middlewares.push(logger);
}

const store = createStore(
 rootReducer,
 applyMiddleware(...middlewares)
);

saga.run(rootSaga);

export default store;
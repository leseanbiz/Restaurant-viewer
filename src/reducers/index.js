import { combineReducers } from 'redux';
import { restaurantsReducer } from './restaurants';
import { filterReducer } from './filter';

const rootReducer = combineReducers({
 restaurantsReducer,
 filterReducer,
})

export default rootReducer;
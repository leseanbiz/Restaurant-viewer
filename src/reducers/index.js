import { combineReducers } from 'redux';
import { restaurantsReducer } from './restaurants';


const rootReducer = combineReducers({
 restaurantsReducer,
})

export default rootReducer;
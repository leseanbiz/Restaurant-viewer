import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { detailsReducer } from './details';
import { favoritesReducer } from './favorites';

const rootReducer = combineReducers({
 moviesReducer,
 detailsReducer,
 favoritesReducer
})

export default rootReducer;
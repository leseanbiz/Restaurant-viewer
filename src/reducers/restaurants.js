import { ADD_RESTAURANTS, FILTER_RESTAURANTS } from '../constants/actionTypes';

const INIT_RESTAURANTS_STATE = [];

const addRestaurantsReducerFunc = (state, action) => {
  return action.payload
}

const filterRestaurantsReducerFunc = (state, action) => {
  console.log("filterRestaurantsReducerFunc: ", state, action)
  return null;
}

export function restaurantsReducer(state = INIT_RESTAURANTS_STATE, action) {
 switch (action.type) {
  case ADD_RESTAURANTS:
    return addRestaurantsReducerFunc(state, action);
  case FILTER_RESTAURANTS:
    return filterRestaurantsReducerFunc(state, action);
  default:
   return state;
  }
}
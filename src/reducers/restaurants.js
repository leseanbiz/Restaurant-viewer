import { ADD_RESTAURANTS } from '../constants/actionTypes';

const INIT_STATE = [];

const addRestaurantsReducerFunc = (state, action) => {
  return action.payload
}

export function restaurantsReducer(state = INIT_STATE, action) {
 switch (action.type) {
  case ADD_RESTAURANTS:
    return addRestaurantsReducerFunc(state, action);
  default:
   return state;
  }
}
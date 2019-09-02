import { ADD_RESTAURANTS, SORT_RESTAURANTS } from '../constants/actionTypes';
import orderBy from 'lodash/orderBy';

const INIT_STATE = [];

const addRestaurantsReducerFunc = (state, action) => {
  return action.payload
}

const sortRestaurantsReducerFunction = (state, action) => {
  const sortValue = action.payload.split(" ");
  return orderBy(state, sortValue[sortValue.length - 1]);
}

export function restaurantsReducer(state = INIT_STATE, action) {
 switch (action.type) {
  case ADD_RESTAURANTS:
    return addRestaurantsReducerFunc(state, action);
  case SORT_RESTAURANTS:
    return sortRestaurantsReducerFunction(state, action);
  default:
   return state;
  }
}


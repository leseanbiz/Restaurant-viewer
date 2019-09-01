import { FILTER_RESTAURANTS } from '../constants/actionTypes';
import store from '../store/index'

const INIT_STATE = [];

const filterRestaurantsReducerFunc = (state, action) => {
 console.log(store.getState())
  console.log("state:", state, "action:", action);
 return action.payload
}

export function filterReducer(state = INIT_STATE, action) {
 switch (action.type) {
  case FILTER_RESTAURANTS:
    return filterRestaurantsReducerFunc(state, action);
  default:
   return state;
  }
}
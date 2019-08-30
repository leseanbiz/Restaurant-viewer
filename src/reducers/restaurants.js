import { ADD_RESTAURANTS } from '../constants/actionTypes';
import get from 'lodash/get';
import { restaurants, restaurantTypes } from '../data';

// const fixedResults = restaurants.map(object => { return { ...object, image: `${object.image}` } });

// console.log(fixedResults)

const INIT_RESTAURANTS_STATE = restaurants.map(restaurant => ({
    ...restaurantTypes.find((restaurantType) => (restaurant.type === restaurantType.type)),
    ...restaurant
}))

const addRestaurantsReducerFunc = (state, action) => {
  return state
}

export function restaurantsReducer(state = INIT_RESTAURANTS_STATE, action) {
 switch (action.type) {
  case ADD_RESTAURANTS:
    return addRestaurantsReducerFunc(state, action);
  default:
   return state;
  }
}
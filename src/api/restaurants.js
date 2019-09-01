import { put } from 'redux-saga/effects';
import { ADD_RESTAURANTS } from '../constants/actionTypes';

export function* fetchRestaurantsSagaWorker(action) {
    
 const json = yield fetch('http://localhost:4000/')
               .then(response => response.json());

 const mergedRestaurantData = json.restaurants.map(restaurant => ({
     ...json.restaurantTypes.find((restaurantType) => (restaurant.type === restaurantType.type)),
     ...restaurant
 }))

 const filteredRestaurants = mergedRestaurantData.filter(el => {
    return el.type === action.payload ? true : false;
 })

 const returnData = action.payload === 'All' ? mergedRestaurantData : filteredRestaurants

 yield put({ type: ADD_RESTAURANTS, payload: returnData});
}
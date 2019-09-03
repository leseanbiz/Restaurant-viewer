import { put } from 'redux-saga/effects';
import { ADD_RESTAURANTS } from '../constants/actionTypes';

export function* fetchRestaurantsSagaWorker(action) {
    
    const json = yield fetch('http://localhost:4000/')
               .then(response => response.json());

    const cleanedData =  json.restaurants.map(el => {
        if(el.website === null){
            return el
        }
        return el.website.includes('http') ? el : {...el, website: `http://${el.website}`}
    })

    const mergedRestaurantData = cleanedData.map(restaurant => ({
        ...json.restaurantTypes.find((restaurantType) => (restaurant.type === restaurantType.type)),
        ...restaurant
    }))

 yield put({ type: ADD_RESTAURANTS, payload: mergedRestaurantData, types: json.restaurantTypes});
}
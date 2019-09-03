import { FETCH_RESTAURANTS, ADD_RESTAURANTS } from '../constants/actionTypes'

export const fetchRestaurants = () => {
 return {type: FETCH_RESTAURANTS}
}

export const addRestaurants = (restaurants, types) => {
 return {type: ADD_RESTAURANTS, payload: restaurants, types: types}
}

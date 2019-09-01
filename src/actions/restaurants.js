import { FETCH_RESTAURANTS, ADD_RESTAURANTS } from '../constants/actionTypes'

export const fetchRestaurants = (type) => {
 return {type: FETCH_RESTAURANTS, payload: type}
}
//can be removes as it will be triggered from the saga worker
export const addRestaurants = (restaurants) => {
 return {type: ADD_RESTAURANTS, payload: restaurants}
}

import { FETCH_RESTAURANTS, ADD_RESTAURANTS, FILTER_RESTAURANTS } from '../constants/actionTypes'

export const fetchRestaurants = () => {
 return {type: FETCH_RESTAURANTS}
}
//can be removes as it will be triggered from the saga worker
export const addRestaurants = (restaurants) => {
 return {type: ADD_RESTAURANTS, payload: restaurants}
}

export const filterRestaurants = (type) => {
 return {type: FILTER_RESTAURANTS, payload: type}
}
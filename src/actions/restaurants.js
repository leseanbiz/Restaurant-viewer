import { FETCH_RESTAURANTS, ADD_RESTAURANTS } from '../constants/actionTypes'

export const fetchRestaurants = () => ({type: FETCH_RESTAURANTS})

export const addRestaurants = (restaurants, types) => ({type: ADD_RESTAURANTS, payload: restaurants, types: types})

import { FILTER_RESTAURANTS } from '../constants/actionTypes';

export const filterRestaurants = (type) => ({type: FILTER_RESTAURANTS, payload: type});
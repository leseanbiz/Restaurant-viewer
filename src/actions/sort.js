import { SORT_RESTAURANTS } from '../constants/actionTypes';

export const sortRestaurants = (type) => ({type: SORT_RESTAURANTS, payload: type})
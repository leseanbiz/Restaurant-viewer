import { FILTER_RESTAURANTS } from '../constants/actionTypes';

export const filterRestaurants = (type) => {
 return {type: FILTER_RESTAURANTS, payload: type}
}
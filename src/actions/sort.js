import { SORT_RESTAURANTS } from '../constants/actionTypes';

export const sortRestaurants = (type) => {
 return {type: SORT_RESTAURANTS, payload: type}
}
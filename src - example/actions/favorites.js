import { ADD_FAV, DELETE_FAV } from '../constants/actionTypes';

export function addFav(payload) {
 console.log("addFav action", "action:", payload)
 return { type: ADD_FAV, payload: payload }
}

export function deleteFav(payload) {
 return { type: DELETE_FAV, payload: payload}
}
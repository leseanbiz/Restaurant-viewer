import { FETCH_DETAILS, ADD_DETAILS } from '../constants/actionTypes';

export function fetchDetails(id) {
 return { type: FETCH_DETAILS, id: id}
}

export function addDetails(details) {
 return { type: ADD_DETAILS, payload: details}
}
import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';

export function fetchMovies(query) {
 return { type: FETCH_MOVIES, query: query}
}

export function addMovies(movies) {
 return { type: ADD_MOVIES, payload: movies}
}

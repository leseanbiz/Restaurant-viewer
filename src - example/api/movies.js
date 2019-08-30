import { put } from 'redux-saga/effects';
import { ADD_MOVIES } from '../constants/actionTypes';
import { PAGE_NUM, MOVIE_DB_BASE_URL, MOVIE_DB_QUERY_PARAMS, API_KEY } from '../constants/api';

export function* fetchMoviesSagaWorker(action) {
 if(!action.query) { return alert("please enter a search value") }
 const json = yield fetch(`${MOVIE_DB_BASE_URL + PAGE_NUM + MOVIE_DB_QUERY_PARAMS + API_KEY}&query=${action.query}`)
                          .then(response => response.status > 400 ? alert("Server error") : response.json())
 json.total_results === 0 ? alert("that search returned 0 results, please try a new search") : yield put({ type: ADD_MOVIES, payload: json});
}

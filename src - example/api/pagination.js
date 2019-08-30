import { put } from 'redux-saga/effects';
import { ADD_MOVIES } from '../constants/actionTypes';
import { MOVIE_DB_BASE_URL, MOVIE_DB_QUERY_PARAMS, API_KEY } from '../constants/api'

export function* paginationSagaWorker(action) {
 const json = yield fetch(`${MOVIE_DB_BASE_URL + action.num + MOVIE_DB_QUERY_PARAMS + API_KEY}&query=${action.query}`)
                          .then(response => response.json())
 yield put({ type: ADD_MOVIES, payload: json});
}
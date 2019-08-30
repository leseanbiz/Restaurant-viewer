import { put } from 'redux-saga/effects';
import { ADD_DETAILS} from '../constants/actionTypes';
import { MOVIE_DB_DETAILS_URL, API_KEY } from '../constants/api'

export function* movieDetailsSagaWorker(action) {
 const json = yield fetch(`${MOVIE_DB_DETAILS_URL + action.id}?api_key=${API_KEY}&language=en-US`)
                          .then(response => response.json());
 yield put({ type: ADD_DETAILS, payload: json});
}
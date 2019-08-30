import { takeEvery } from 'redux-saga/effects';
import { FETCH_MOVIES } from '../constants/actionTypes';
import { fetchMoviesSagaWorker } from '../api/movies';

export function* fetchMoviesSagaWatcher() {
 yield takeEvery(FETCH_MOVIES, fetchMoviesSagaWorker);
}

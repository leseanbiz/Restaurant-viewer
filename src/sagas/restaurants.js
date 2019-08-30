import { takeEvery } from 'redux-saga/effects';
import { FETCH_RESTAURANTS } from '../constants/actionTypes';
import { fetchRestaurantsSagaWorker } from '../api/restaurants';

export function* fetchRestaurantsSagaWatcher() {
 yield takeEvery(FETCH_RESTAURANTS, fetchRestaurantsSagaWorker);
}

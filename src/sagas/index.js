import { all } from 'redux-saga/effects';
import { fetchRestaurantsSagaWatcher } from './restaurants';

export default function* rootSaga() {
 yield all([
  fetchRestaurantsSagaWatcher(),
 ])
}
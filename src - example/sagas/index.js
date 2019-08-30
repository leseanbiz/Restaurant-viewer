import { all } from 'redux-saga/effects';
import { fetchMoviesSagaWatcher } from './movies';
import { movieDetailsSagaWatcher } from './details';
import { paginationSagaWatcher } from './pagination';


export default function* rootSaga() {
 yield all([
  fetchMoviesSagaWatcher(),
  paginationSagaWatcher(),
  movieDetailsSagaWatcher(),
 ])
}
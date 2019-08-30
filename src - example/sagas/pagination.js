import { NEXT_PAGE, PREVIOUS_PAGE } from '../constants/actionTypes';
import { takeEvery } from 'redux-saga/effects';
import { paginationSagaWorker } from '../api/pagination';

export function* paginationSagaWatcher() {
 yield takeEvery([NEXT_PAGE, PREVIOUS_PAGE], paginationSagaWorker)
}

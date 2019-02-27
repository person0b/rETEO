import { takeEvery } from 'redux-saga/effects';
import { FETCHED_GEOLOCATION, FETCHED_SEARCH } from '../ducks';

import fetchGeolocationAsync from './geolocation';

function* watchFetchGeolocation() {
  yield takeEvery(FETCHED_GEOLOCATION, fetchGeolocationAsync);
}

// function* watchFetchSearch() {
//   yield takeEvery(FETCHED_SEARCH, fetchSearchAsync);
// }

export { watchFetchGeolocation };

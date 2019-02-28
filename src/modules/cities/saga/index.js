import { takeEvery } from 'redux-saga/effects';
import { FETCHED_GEOLOCATION } from '../ducks';

import fetchGeolocationAsync from './geolocation';

function* watchFetchGeolocation() {
  yield takeEvery(FETCHED_GEOLOCATION, fetchGeolocationAsync);
}

export { watchFetchGeolocation };

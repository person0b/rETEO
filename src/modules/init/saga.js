import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCHED_INIT } from './ducks';
import { requestInit, requestInitSuccess, requestInitError } from './ducks';
import fetchGeolocationAsync from '../cities/saga/geolocation';
import fetchCurrentWeatherAsync from '../weather/saga/currentWeather';

function* fetchInitAsync() {
  try {
    yield put(requestInit());
    yield call(fetchGeolocationAsync);
    yield call(fetchCurrentWeatherAsync);
    yield put(requestInitSuccess());
  } catch (error) {
    yield put(requestInitError());
  }
}

function* watchFetchInit() {
  yield takeEvery(FETCHED_INIT, fetchInitAsync);
}

export default watchFetchInit;

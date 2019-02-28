import { takeEvery } from 'redux-saga/effects';
import { FETCHED_CURRENT_WEATHER } from '../ducks';

import fetchCurrentWeatherAsync from './currentWeather';

function* watchFetchCurrentWeather() {
  yield takeEvery(FETCHED_CURRENT_WEATHER, fetchCurrentWeatherAsync);
}

export { watchFetchCurrentWeather };

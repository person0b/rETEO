import { put, call, select } from 'redux-saga/effects';
import {
  requestCurrentWeather,
  requestCurrentWeatherSuccess,
  requestCurrentWeatherError
} from '../ducks';
import { getCurrentWeather } from '../../../services/weatherServices';
import transformCurrent from './transformCurrent';

function* fetchCurrentWeatherAsync() {
  const {
    cities: { geolocation }
  } = yield select();
  try {
    yield put(requestCurrentWeather());
    const response = yield call(
      getCurrentWeather,
      geolocation.lat,
      geolocation.lon
    );
    console.log(response);
    const data = transformCurrent(response);
    yield put(requestCurrentWeatherSuccess(data));
  } catch (error) {
    yield put(requestCurrentWeatherError());
  }
}

export default fetchCurrentWeatherAsync;

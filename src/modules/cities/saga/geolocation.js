import { put, call } from 'redux-saga/effects';
import {
  requestGeolocation,
  requestGeolocationSuccess,
  requestGeolocationError
} from '../ducks';
import getUserLocation from '../../../services/geolocationServices';
import { getAddressFromLocation } from '../../../services/geocoderServices';

function* fetchGeolocationAsync() {
  try {
    yield put(requestGeolocation());
    const { latitude, longitude } = yield call(getUserLocation);
    const address = yield call(getAddressFromLocation, latitude, longitude);
    const data = {
      lat: latitude,
      lon: longitude,
      country: address.Country,
      city: address.City
    };
    yield put(requestGeolocationSuccess(data));
  } catch (error) {
    yield put(requestGeolocationError());
  }
}

export default fetchGeolocationAsync;

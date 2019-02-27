export const REQUESTED_GEOLOCATION = `@reteo/REQUESTED_GEOLOCATION`;
export const REQUESTED_GEOLOCATION_SUCCEEDED = `@reteo/REQUESTED_GEOLOCATION_SUCCEEDED`;
export const REQUESTED_GEOLOCATION_FAILED = `@reteo/REQUESTED_GEOLOCATION_FAILED`;
export const REQUESTED_SEARCH = `@reteo/REQUESTED_SEARCH`;
export const REQUESTED_SEARCH_SUCCEEDED = `@reteo/REQUESTED_SEARCH_SUCCEEDED`;
export const REQUESTED_SEARCH_FAILED = `@reteo/REQUESTED_SEARCH_FAILED`;
export const FETCHED_GEOLOCATION = `@reteo/FETCHED_GEOLOCATION`;
export const FETCHED_SEARCH = `@reteo/FETCHED_GEOLOCATION`;
export const SELECT_CITY = `@reteo/SELECT_CITY`;

export const requestGeolocation = () => {
  return { type: REQUESTED_GEOLOCATION };
};

export const requestGeolocationSuccess = payload => {
  return { type: REQUESTED_GEOLOCATION_SUCCEEDED, payload };
};

export const requestGeolocationError = () => {
  return { type: REQUESTED_GEOLOCATION_FAILED };
};

export const requestSearch = () => {
  return { type: REQUESTED_SEARCH };
};

export const requestSearchSuccess = payload => {
  return { type: REQUESTED_SEARCH_SUCCEEDED, payload };
};

export const requestSearchError = () => {
  return { type: REQUESTED_SEARCH_FAILED };
};

export const fetchGeolocation = () => {
  return { type: FETCHED_GEOLOCATION };
};

export const fetchSearch = () => {
  return { type: FETCHED_SEARCH };
};

export const selectCity = payload => {
  return { type: SELECT_CITY, payload };
};

const initialState = {
  geolocation: null,
  search: null,
  select: null,
  geolocationStatus: `none`,
  searchStatus: `none`
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_GEOLOCATION:
      return {
        ...state,
        geolocationStatus: `request`
      };
    case REQUESTED_GEOLOCATION_SUCCEEDED:
      return {
        ...state,
        geolocation: action.payload,
        geolocationStatus: `success`
      };
    case REQUESTED_GEOLOCATION_FAILED:
      return {
        ...state,
        geolocationStatus: `error`
      };
    case REQUESTED_SEARCH:
      return {
        ...state,
        search: {},
        searchStatus: `request`
      };
    case REQUESTED_SEARCH_SUCCEEDED:
      return {
        ...state,
        search: action.payload,
        searchStatus: `success`
      };
    case REQUESTED_SEARCH_FAILED:
      return {
        ...state,
        searchStatus: `error`
      };
    case SELECT_CITY:
      return {
        ...state,
        select: action.payload
      };
    default:
      return state;
  }
};

export default citiesReducer;

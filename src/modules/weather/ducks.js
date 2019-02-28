export const REQUESTED_CURRENT = `@reteo/weather/REQUESTED_CURRENT`;
export const REQUESTED_CURRENT_SUCCEEDED = `@reteo/weather/REQUESTED_CURRENT_SUCCEEDED`;
export const REQUESTED_CURRENT_FAILED = `@reteo/weather/REQUESTED_CURRENT_FAILED`;
export const REQUESTED_TODAY = `@reteo/weather/REQUESTED_TODAY`;
export const REQUESTED_TODAY_SUCCEEDED = `@reteo/weather/REQUESTED_TODAY_SUCCEEDED`;
export const REQUESTED_TODAY_FAILED = `@reteo/weather/REQUESTED_TODAY_FAILED`;
export const REQUESTED_TOMORROW = `@reteo/weather/REQUESTED_TOMORROW`;
export const REQUESTED_TOMORROW_SUCCEEDED = `@reteo/weather/REQUESTED_TOMORROW_SUCCEEDED`;
export const REQUESTED_TOMORROW_FAILED = `@reteo/weather/REQUESTED_TOMORROW_FAILED`;
export const FETCHED_CURRENT_WEATHER = `@reteo/weather/FETCHED_CURRENT_WEATHER`;
export const FETCHED_TODAY_WEATHER = `@reteo/weather/FETCHED_TODAY_WEATHER`;
export const FETCHED_TOMORROW_WEATHER = `@reteo/weather/FETCHED_TOMORROW_WEATHER`;

export const requestCurrentWeather = () => {
  return { type: REQUESTED_CURRENT };
};

export const requestCurrentWeatherSuccess = payload => {
  return { type: REQUESTED_CURRENT_SUCCEEDED, payload };
};

export const requestCurrentWeatherError = () => {
  return { type: REQUESTED_CURRENT_FAILED };
};

export const requestTodayWeather = () => {
  return { type: REQUESTED_TODAY };
};

export const requestTodayWeatherSuccess = payload => {
  return { type: REQUESTED_TODAY_SUCCEEDED, payload };
};

export const requestTodayWeatherError = () => {
  return { type: REQUESTED_TODAY_FAILED };
};

export const requestTomorrowWeather = () => {
  return { type: REQUESTED_TODAY };
};

export const requestTomorrowWeatherSuccess = payload => {
  return { type: REQUESTED_TODAY_SUCCEEDED, payload };
};

export const requestTomorrowWeatherError = () => {
  return { type: REQUESTED_TODAY_FAILED };
};

export const fetchCurrentWeather = () => {
  return { type: FETCHED_CURRENT_WEATHER };
};

export const fetchTodayWeather = () => {
  return { type: FETCHED_TODAY_WEATHER };
};

export const fetchTomorrowWeather = () => {
  return { type: FETCHED_TODAY_WEATHER };
};

const initialState = {
  current: {},
  today: {},
  tomorrow: {},
  currentStatus: `none`,
  todayStatus: `none`,
  tomorrowStatus: `none`
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_CURRENT:
      return {
        ...state,
        currentStatus: `request`
      };
    case REQUESTED_CURRENT_SUCCEEDED:
      return {
        ...state,
        current: action.payload,
        currentStatus: `success`
      };
    case REQUESTED_CURRENT_FAILED:
      return {
        ...state,
        currentStatus: `error`
      };
    case REQUESTED_TODAY:
      return {
        ...state,
        todayStatus: `request`
      };
    case REQUESTED_TODAY_SUCCEEDED:
      return {
        ...state,
        today: action.payload,
        todayStatus: `success`
      };
    case REQUESTED_TODAY_FAILED:
      return {
        ...state,
        todayStatus: `error`
      };
    case REQUESTED_TOMORROW:
      return {
        ...state,
        tomorrowStatus: `request`
      };
    case REQUESTED_TOMORROW_SUCCEEDED:
      return {
        ...state,
        tomorrow: action.payload,
        tomorrowStatus: `success`
      };
    case REQUESTED_TOMORROW_FAILED:
      return {
        ...state,
        tomorrowStatus: `error`
      };
    default:
      return state;
  }
};

export default weatherReducer;

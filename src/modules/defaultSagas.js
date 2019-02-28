// import { watchFetchCurrentWeather } from './weather/saga';
import watchFetchInit from './init/saga';

export default () => [
  // watchFetchCurrentWeather(),
  watchFetchInit()
];

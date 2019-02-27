import { watchFetchGeolocation } from './cities/saga';

export default () => [watchFetchGeolocation()];

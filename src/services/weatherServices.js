// Dark Sky API
import axios from 'axios';

const KEY = `da14e6ba765d4fa5b75efdc3615f6a6d`;

export const getCurrentWeather = (lat, lon) => {
  return axios(
    `https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lon}&key=${KEY}`
  );
};

export const getTodayWeather = (lat, lon) => {
  return axios(
    `https://api.darksky.net/forecast/${KEY}/${lat},${lon}?exclude=[currently,minutely,daily,alerts,flags]&lang=[en]`
  )
    .then(res => res.currently)
    .catch(error => {
      console.log(error);
    });
};

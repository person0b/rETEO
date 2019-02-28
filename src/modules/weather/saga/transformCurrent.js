const transformCurrent = current => {
  const { app_temp, wind_spd, weather } = current.data.data[0];
  return {
    summary: weather.description,
    temperature: app_temp,
    windSpeed: wind_spd
  };
};

export default transformCurrent;

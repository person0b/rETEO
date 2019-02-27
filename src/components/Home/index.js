import React from 'react';
import CurrentWeather from '../CurrentWeather';
import SavedCities from '../SavedCities';

const Home = () => {
  return (
    <main>
      <CurrentWeather />
      <SavedCities />
    </main>
  );
};

export default Home;

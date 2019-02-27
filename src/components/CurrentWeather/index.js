import React from 'react';
import Styled from './styled';

const CurrentWeather = () => {
  return (
    <Styled>
      <Styled.Temp>18 °C</Styled.Temp>
      <Styled.Place>London, GB</Styled.Place>
      <Styled.Sky>Clear, Wind - 2.77 meter per second</Styled.Sky>
    </Styled>
  );
};

export default CurrentWeather;

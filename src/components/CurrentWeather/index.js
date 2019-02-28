import React from 'react';
import Styled from './styled';
import { connect } from 'react-redux';

const CurrentWeather = ({
  geolocationStatus,
  currentStatus,
  temperature,
  city,
  country,
  summary,
  windSpeed
}) => {
  if (currentStatus === `request` || geolocationStatus === `request`) {
    return (
      <Styled>
        <Styled.Temp>LOADING...</Styled.Temp>
      </Styled>
    );
  }
  if (currentStatus !== `success`) {
    return (
      <Styled>
        <Styled.Temp>ERROR!!!</Styled.Temp>
      </Styled>
    );
  }
  return (
    <Styled>
      <Styled.Temp>{`${temperature} °C`}</Styled.Temp>
      <Styled.Place>{`${city}, ${country}`}</Styled.Place>
      <Styled.Sky>{`${summary}, Wind - ${windSpeed} meter per second`}</Styled.Sky>
    </Styled>
  );
};

export default connect(
  ({
    cities: {
      geolocation: { city, country },
      geolocationStatus
    },
    weather: {
      current: { summary, temperature, windSpeed },
      currentStatus
    }
  }) => ({
    city,
    country,
    summary,
    temperature,
    windSpeed,
    geolocationStatus,
    currentStatus
  })
)(CurrentWeather);

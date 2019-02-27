import React from 'react';
import Styled from './styled';
import CityCart from '../../elements/CityCart';

const SavedCities = () => {
  const sities = [
    `Moscow`,
    `Kirov`,
    `New-York`,
    `San-Francisco`,
    `Vancouver`,
    `Toronto`
  ];

  const sitiesCarts = sities.map(city => {
    return (
      <Styled.Item key={city}>
        <CityCart name={city} />
      </Styled.Item>
    );
  });

  return (
    <Styled>
      <Styled.Title>Saved Cities</Styled.Title>
      <Styled.List>{sitiesCarts}</Styled.List>
    </Styled>
  );
};

export default SavedCities;

import React from 'react';
import Styled from './styled';

const CityCart = ({ name }) => {
  const link = `/${name}`;

  return <Styled to={link}>{name}</Styled>;
};

export default CityCart;

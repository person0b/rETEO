import React from 'react';
import Styled from './styled';

const Menu = () => {
  return (
    <Styled>
      <Styled.Item>
        <Styled.Title to="/">rETEO</Styled.Title>
      </Styled.Item>
      <Styled.Item>
        <Styled.Link to="/">Today</Styled.Link>
      </Styled.Item>
      <Styled.Item>
        <Styled.Link to="/">Tomorrow</Styled.Link>
      </Styled.Item>
      <Styled.Item>
        <Styled.Link to="/">Weak</Styled.Link>
      </Styled.Item>
    </Styled>
  );
};

export default Menu;

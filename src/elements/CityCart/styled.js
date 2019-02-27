import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CityCart = styled(Link)`
  display: flex;
  width: 200px;
  height: 120px;
  padding: 10px;

  justify-content: center;
  align-items: center;

  font-size: 20px;

  text-decoration: none;

  color: ${props => props.theme.fHigh};
  border: 1px solid ${props => props.theme.bHigh};
  transition: 0.3s;

  &:hover,
  &:focus {
    color: ${props => props.theme.fInv};
    background: ${props => props.theme.bInv};
    border-color: ${props => props.theme.bInv};
    border-radius: 10px;
  }
`;

export default CityCart;

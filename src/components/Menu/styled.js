import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  justify-content: flex-start;
  align-items: baseline;

  list-style: none;
`;

Menu.Item = styled.li`
  margin-left: 20px;
`;

Menu.Link = styled(Link)`
  font-size: 16px;

  text-decoration: none;
  color: ${props => props.theme.fHigh};
  transition: 0.3s;

  &:hover,
  &:focus {
    color: ${props => props.theme.fMed};
  }
`;

Menu.Title = styled(Link)`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;

  text-decoration: none;
  color: ${props => props.theme.fHigh};
  transition: 0.3s;

  &:hover,
  &:focus {
    color: ${props => props.theme.fMed};
  }
`;

export default Menu;

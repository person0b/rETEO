import styled from 'styled-components';

const Header = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  padding: 10px;

  justify-content: space-between;
  align-items: baseline;

  border-bottom: 1px solid ${props => props.theme.bHigh};
  background: ${props => props.theme.background};
`;

export default Header;

import styled from 'styled-components';

const Search = styled.input`
  width: 20%;
  padding: 10px;

  font-size: 16px;
  font-weight: normal;

  background: none;
  color: ${props => props.theme.fHigh};
  border: 1px solid ${props => props.theme.bHigh};
  transition: 0.3s;

  &::placeholder {
    color: ${props => props.theme.fHigh};
  }

  &:hover {
    border-color: ${props => props.theme.bInv};
  }

  &:focus {
    color: ${props => props.theme.fInv}
    background: ${props => props.theme.bInv};
    border-radius: 10px;

    &::placeholder {
      color: ${props => props.theme.fInv};
    }
  }
`;

export default Search;

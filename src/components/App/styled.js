import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before
  *::after {
    box-sizing: border-box;
    outline: none;
  }

  *:focus {
    outline: none;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;

    color: ${props => props.theme.fHigh};
    background: ${props => props.theme.background};
  }

  a {
    color: ${props => props.theme.fMed};
    &:hover {
      color: ${props => props.theme.fLow};
    }
  }
`;

export { GlobalStyle };

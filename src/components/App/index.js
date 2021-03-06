import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styled';
import * as themes from './themes';
import * as actions from '../../modules/init/ducks';

import Header from '../../elements/Header';
import Menu from '../Menu';
// import Search from '../Search';
import Home from '../Home';

const App = ({ fetchInit }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      fetchInit();
      setMounted(true);
    }
  });
  return (
    <ThemeProvider theme={themes.battlestation}>
      <Router>
        <div className="App">
          <GlobalStyle />
          <Header>
            <Menu />
            {/* <Search /> */}
          </Header>
          <Home />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default connect(
  state => ({}),
  {
    fetchInit: actions.fetchInit
  }
)(App);

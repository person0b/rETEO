import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styled';
import * as themes from './themes';
import * as actions from '../../modules/cities/ducks';

import Header from '../../elements/Header';
import Menu from '../Menu';
import Search from '../Search';
import Home from '../Home';

const App = ({ fetchGeolocation }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      fetchGeolocation();
    }
  });
  return (
    <ThemeProvider theme={themes.battlestation}>
      <Router>
        <div className="App">
          <GlobalStyle />
          <Header>
            <Menu />
            <Search />
          </Header>
          <Home />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default connect(
  state => ({
    geolocation: state.cities.geolocation,
    geolocationStatus: state.cities.geolocationStatus
  }),
  {
    fetchGeolocation: actions.fetchGeolocation
  }
)(App);

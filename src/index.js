import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import initReducer from './modules/init/ducks';
import citiesReducer from './modules/cities/ducks';
import weatherReducer from './modules/weather/ducks';
import defaultSagas from './modules/defaultSagas';

import App from './components/App';

const reducer = combineReducers({
  init: initReducer,
  cities: citiesReducer,
  weather: weatherReducer
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose;

const store = createStore(reducer, {}, composeEnhancers(...enhancers));
sagaMiddleware.run(function* cb() {
  yield all(defaultSagas());
});

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

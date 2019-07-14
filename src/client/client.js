// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';

const enhancers = [];
/* eslint-disable no-underscore-dangle */
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
/* eslint-enable */

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers,
);

const store = createStore(reducers, {}, composedEnhancers);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

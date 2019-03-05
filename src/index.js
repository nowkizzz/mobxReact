import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import App from './App.jsx';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'mobx-react';
import Routes from './routes';

ReactDOM.render(
  // <App store={store} />,
  // <App  />,
  <Provider {...store}>
    <Router>
      <Routes></Routes>
    </Router>
  </Provider>,
  document.getElementById('app')
)
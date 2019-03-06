import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'mobx-react';
import Routes from './routes';
import '@/assets/styles/reset.scss';

ReactDOM.render(
  // <App store={store} />,
  // <App  />,
  // 如果用的是{store}，就可以直接@inject('app')  如果是{...store}就一个个导入 @inject('store')
  <Provider {...store}>
    <Router>
      <Routes></Routes>
    </Router>
  </Provider>,
  document.getElementById('app')
)
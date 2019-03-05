import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/home/index.jsx';

class routes extends Component {
  render() {
    return (
      // <Router>
      <div className="routesPage">
        <Switch>
          <Route component={App} path='/' exact></Route>
          <Route component={Home} path='/home'></Route>
        </Switch>
      </div>
      // </Router>

    );
  }
}


export default routes;
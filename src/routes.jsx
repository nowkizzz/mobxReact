import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import Index from './pages/index/index.jsx';
import Home from './pages/home/index.jsx';
import Loadable from 'react-loadable';
import LoadingComponent from '@/components/loadingComponent';
const Index = Loadable({
  loader: () => import('./pages/index/index.jsx'),
  loading: LoadingComponent,
});
class routes extends Component {
  render() {
    return (
      // <Router>
      <div className="routesPage">
        <Switch>
          <Route component={Index} path='/' exact></Route>
          <Route component={Home} path='/home'></Route>
        </Switch>
      </div>
      // </Router>

    );
  }
}


export default routes;
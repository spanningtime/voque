import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import Access from 'components/Access';
import App from 'components/app';
import Dashboard from 'components/Dashboard';
import Info from 'components/Info';
import Landing from 'components/Landing';
import Login from 'components/Login';
import React from 'react';
import Register from 'components/Register';
import Requests from 'components/Requests';
import SongList from 'components/SongList';
import Thanks from 'components/Thanks';

const Routes = React.createClass({
  render() {
    return <Router
      history={browserHistory}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <Route component={App} path="/" >
        <IndexRoute component={Landing} />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={Access} path="/access" />
        <Route component={SongList} path="/songlist" />
        <Route component={Thanks} path="/thanks" />
        <Route component={Info} path="/info" />
        <Route component={Requests} path="/requests" />
        <Route component={Dashboard} path="/dashboard" />
      </Route>
    </Router>;
  }
});

export default Routes;

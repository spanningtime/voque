import { IndexRoute, browserHistory, Route, Router } from 'react-router';
import App from 'components/app';
import Landing from 'components/Landing';
import React from 'react';
import Access from 'components/Access';
import SongList from 'components/SongList';
import Thanks from 'components/Thanks';
import Info from 'components/Info';
import Requests from 'components/Requests';
import Register from 'components/Register';
import Login from 'components/Login';
import Dashboard from 'components/Dashboard';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}
        onUpdate={() => window.scrollTo(0, 0)}>
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

import { IndexRoute, browserHistory, Route, Router } from 'react-router';
import App from 'components/app';
import Landing from 'components/Landing';
import React from 'react';
import Access from 'components/Access';
import SongList from 'components/SongList';
import Thanks from 'components/Thanks';
import Info from 'components/Info';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/" >
        <IndexRoute component={Landing} />
        <Route component={Access} path="/access" />
        <Route component={SongList} path="/songlist" />
        <Route component={Thanks} path="/thanks" />
        <Route component={Info} path="/info" />
      </Route>
    </Router>;
  }
});

export default Routes;

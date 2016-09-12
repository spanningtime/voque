import { IndexRoute, browserHistory, Route, Router } from 'react-router';
import App from 'components/app';
import Landing from 'components/Landing';
import React from 'react';
import Access from 'components/Access';
import SongList from 'components/SongList';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/" >
        <IndexRoute component={Landing} />
        <Route component={Access} path="/access" />
        <Route component={SongList} path="/songlist" />
      </Route>
    </Router>;
  }
});

export default Routes;

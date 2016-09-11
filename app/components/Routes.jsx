import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import React from 'react';
import App from 'components/App';
import Landing from 'components/Landing';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/" >
        <IndexRoute component={Landing} ></IndexRoute>
      </Route>
    </Router>;
  }
});

export default Routes;

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';

const Dashboard = React.createClass({

  handleTouchTap() {
    this.props.getRequests();
    this.props.router.push('/requests');
  },

  render() {

    return <div className="content-container">
      <h1 className="main-header title">Dashboard</h1>
      <RaisedButton
        onTouchTap={this.handleTouchTap}
        label="View Requests"/>
    </div>
  }
});

export default withRouter(Dashboard);

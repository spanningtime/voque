import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import Toggle from 'material-ui/Toggle';

const Dashboard = React.createClass({

  handleTouchTap() {
    this.props.getRequests();
    this.props.router.push('/requests');
  },

  handleChange() {
    this.props.acceptRequests();
  },

  render() {
    const styleToggle = {
      marginBottom: 16,
    };

    const styleIcon = {
      width: '50px',
      color: '#f4af1d',
    };

    const styleH1 = {
      borderBottom: '2px solid #f4af1d'
    };

    return <div className="content-container">
      <h1 className="main-header"
          style={styleH1}>Dashboard</h1>
      <div>
        <Toggle
          label="Accept Requests?"
          style={styleToggle}
          iconStyle={styleIcon}
          toggled={this.props.accept}
          onToggle={this.handleChange}
        />
      </div>
      <RaisedButton
        onTouchTap={this.handleTouchTap}
        label="View Requests"/>
    </div>
  }
});

export default withRouter(Dashboard);

import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Toggle from 'material-ui/Toggle';
import { withRouter } from 'react-router';

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
      marginBottom: 16
    };

    const styleIcon = {
      width: '50px',
      color: '#f4af1d'
    };

    const styleH1 = {
      borderBottom: '2px solid #f4af1d'
    };

    return <div className="content-container">
      <h1
        className="main-header"
        style={styleH1}
      >
        Dashboard
      </h1>
      <div>
        <Toggle
          iconStyle={styleIcon}
          label="Accept Requests?"
          onToggle={this.handleChange}
          style={styleToggle}
          toggled={this.props.accept}
        />
      </div>

      <RaisedButton
        label="View Requests"
        onTouchTap={this.handleTouchTap}
      />

      {/* eslint-disable max-len */}
      <h5 id="current-code">Current code: <span id="code-name">{this.props.user.code}</span></h5>
      {/* eslint-enable max-len*/}
      <div id="upload-form-container">
        <form
          id="uploadForm"
          enctype="multipart/form-data"
          method="post"
          action="/upload"
        >
          <input type="file" name="songlist" />
          <input
            type="submit"
            value="UploadFile"
            name="submit"
          />
        </form>
      </div>
    </div>;
  }
});

export default withRouter(Dashboard);

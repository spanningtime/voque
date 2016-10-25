import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField'
import { withRouter } from 'react-router';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      file: null,
      inputEdit: 'none',
      showCode: 'inline-block',
      showCheck: 'none',
      showEdit: 'inline-block'
    };
  },

  handleTouchTap() {
    this.props.getRequests();
    this.props.router.push('/requests');
  },

  handleChange() {
    this.props.acceptRequests();
  },

  handleFile(event) {
    this.setState({ file: event.target.value })
    console.log(event.target.value)
  },

  handleSubmit(event) {
    console.log('hey');
    event.preventDefault();
    this.props.postSongs();
  },

// do some onblur stuff here to keep the code
  handleToEdit() {
    this.setState({
      inputEdit: 'inline-block',
      showCode: 'none',
      showEdit: 'none',
      showCheck: 'inline-block'
    })
  },

  // handleBlur() {
  //   console.log('blur');
  //   this.setState({
  //     inputEdit: 'none',
  //     showCode: 'inline-block'
  //   })
  // },

//need to create route for updating new code in db
  handleConfirmEdit() {
    this.setState({
      showEdit: 'inline-block',
      showCheck: 'none',
      inputEdit: 'none',
      showCode: 'inline-block'
    })
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

    const styleTextField = {
      display: this.state.inputEdit
    };

    const styleCode = {
      display: this.state.showCode
    };

    const styleCheck = {
      display: this.state.showCheck
    };

    const styleEdit = {
      display: this.state.showEdit
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
      <div id="code-container">
        <h5 id="current-code">Current code:
          <span
            id="code-name"
            style={styleCode}
            onTouchTap={this.handleToEdit}
          >
            {this.props.user.code}
          </span>
          <span id="code-input">
            <TextField
              id="text-field-default"
              defaultValue={this.props.user.code}
              style={styleTextField}
              onBlur={this.handleBlur}
            />
          </span>
        </h5>
        <img
          className="search-icon"
          src={'./images/edit.svg'}
          onTouchTap={this.handleToEdit}
          style={styleEdit}
        />
        <img
          className="search-icon"
          src={'./images/check.svg'}
          onTouchTap={this.handleConfirmEdit}
          style={styleCheck}
        />
      </div>
      {/* eslint-enable max-len*/}
      <div id="upload-form-container">
        <form
          id="uploadForm"
          ref="form"
          encType="multipart/form-data"
          method="post"
          action="/upload/songs/:adminId"
          onSubmit={this.handleSubmit}
        >
          <input
            type="file"
            name="songlist"
            onChange={this.handleFile}
          />
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

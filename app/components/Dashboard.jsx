import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Toggle from 'material-ui/Toggle';
import { withRouter } from 'react-router';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      file: null,
      inputEdit: 'none',
      showCode: 'inline-block',
      showCheck: 'none',
      showEdit: 'inline-block',
      kjCode: this.props.user.code,
      filename: '',
      fileInputDisplay: 'hidden',
      folderIconDisplay: 'flex',
      uploadIconDisplay: 'none',
      folderIconColor: '#f4af1d',
      fileTypeErrorDisplay: 'none'
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
    console.log(event.target.value)
    const path = event.target.value;
    let filename;

      if (path) {
        if (path.slice(path.length - 3) !== "xml") {
          this.setState({
            folderIconColor: "#df2329",
            fileTypeErrorDisplay: 'flex'
         })
          console.log("must be an xml file");
          return;
        }
        else {
          this.setState({
            folderIconColor: "#f4af1d",
            fileTypeErrorDisplay: 'none'
          })
        }
        const startIndex = (path.indexOf('\\') >= 0 ? path.lastIndexOf('\\') : path.lastIndexOf('/'));
        filename = path.substring(startIndex);

        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
          filename = filename.substring(1);
        }
      }

    this.setState({
      file: event.target.value,
      uploadIconDisplay: 'flex',
      folderIconDisplay: 'none',
      filename
    });
  },

  handleSubmit(event) {
    console.log('hey');
    event.preventDefault();
    this.props.postSongs();
  },

  handleToEdit() {
    this.setState({
      inputEdit: 'inline-block',
      showCode: 'none',
      showEdit: 'none',
      showCheck: 'inline-block'
    })
  },

// need route to post updated code to db
  handleConfirmEdit(event) {
    this.setState({
      showEdit: 'inline-block',
      showCheck: 'none',
      inputEdit: 'none',
      showCode: 'inline-block'
    })
    this.props.updateKjCode(this.state.kjCode);
  },

  handleTextFieldChange(event) {
    this.setState({ kjCode: event.target.value })
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

    const styleToggleOn = {
      display: this.props.accept ? 'inline-block' : 'none'
    };

    const styleToggleOff = {
      display: this.props.accept ? 'none' : 'inline-block',
      color: "#df2329"
    };

    const styleFileInput = {
      display: this.state.fileInputDisplay
    };

    const styleUploadIcon = {
      display: this.state.uploadIconDisplay
    };

    const styleFolderIcon = {
      display: this.state.folderIconDisplay,
      backgroundColor: this.state.folderIconColor
    };

    const styleFileTypeError = {
      display: this.state.fileTypeErrorDisplay
    };

    return <div className="content-container">
      <h1
        className="main-header"
        style={styleH1}
      >
        Dashboard
      </h1>
      <div id="toggle-container">
        <Toggle
          iconStyle={styleIcon}
          label="Accept Requests?"
          onToggle={this.handleChange}
          style={styleToggle}
          toggled={this.props.accept}
        />
        <h5 id="toggle-on" style={styleToggleOn}>ON</h5>
        <h5 id="toggle-off" style={styleToggleOff}>OFF</h5>
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
          >
            {this.state.kjCode}
          </span>
          <span id="code-input">
            <input
              id="code-input-field"
              placeholder="enter a new code"
              style={styleTextField}
              onBlur={this.handleBlur}
              onChange={this.handleTextFieldChange}
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
          id="upload-form"
          ref="form"
          encType="multipart/form-data"
          method="post"
          action="/upload/songs/:adminId"
          onSubmit={this.handleSubmit}
        >
          <label>
            <div
              id="folder-container"
              style={styleFolderIcon}
            >
              <img
                id="folder-icon"
                src={'./images/folder-icon.svg'}
              />
              <input
                type="file"
                name="songlist"
                onChange={this.handleFile}
              />
            </div>
          </label>
          <label>
            <div
              id="file-upload-container"
              style={styleUploadIcon}
            >
              <img
                id="upload-icon"
                src={'./images/uplodad.svg'}
              />
              <input
                type="submit"
                name="submit"
              />
            </div>
          </label>
          <h6 id="filename">{this.state.filename}</h6>
          <h6
            id="file-type-error"
            style={styleFileTypeError}
          >
            Song lists must be in XML format.<br/> Please choose another file.
          </h6>
        </form>
      </div>
    </div>;
  }
});

export default withRouter(Dashboard);

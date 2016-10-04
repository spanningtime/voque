import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Access = React.createClass({

  getInitialState() {
    return {
      code: ''
    };
  },

  handleTouchTap() {
    this.props.getSongs(this.state.code);
  },

  handleChange(event) {
    this.setState({
      code: event.target.value
    });
  },

  render() {
    const inputStyle = {
      borderColor: '#F4AF1D'
    };

    return <div className="content-container">
      <h1 className="main-header">Enter the unique code to access your KJ's song list.
      </h1>
      <div>
        <TextField
          className="song-input"
          name="code"
          onChange={this.handleChange}
          underlineFocusStyle={inputStyle}
        />

        <FlatButton
          className="flat-btn"
          label="View songs"
          onTouchTap={this.handleTouchTap}
        />
      </div>
    </div>;
  }
});

export default Access;

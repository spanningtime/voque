import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

const Access = React.createClass({

  getInitialState() {
    return {
      code: ''
    }
  },

  handleTouchTap() {
    this.props.getSongs(this.state.code)
    console.log(this.state.code);
  },

  handleChange(event) {
    this.setState({
      code: event.target.value
    })
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
          name="code"
          className='song-input'
          underlineFocusStyle={inputStyle}
          onChange={this.handleChange}
        />

        <FlatButton
          onTouchTap={this.handleTouchTap}
          className='flat-btn'
          label="View songs"
          />
      </div>
    </div>
  }
})

export default Access;

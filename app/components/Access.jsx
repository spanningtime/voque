import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Access = React.createClass({
  render() {

    const inputStyle = {
      borderColor: '#F4AF1D'
    };

    return <div className="content-container">
      <h1 className="main-header">Enter the unique code to access your KJ's song list.
      </h1>
      <div>
        <TextField className='song-input' underlineFocusStyle={inputStyle}/>
        <FlatButton
          onTouchTap={this.props.getSongs}
          className='flat-btn'
          label="View songs"
          />
      </div>
    </div>
  }
})

export default Access;

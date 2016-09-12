import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Access = React.createClass({
  render() {

    const inputStyle = {
      borderColor: '#F4AF1D'
    };

    return <div className="content-container">
      <h1 className="main-header">Enter the unique code to access to access your KJ's song list.
      </h1>
      <TextField underlineFocusStyle={inputStyle}/>
      <FlatButton label="View songs" />
    </div>
  }
})

export default Access;

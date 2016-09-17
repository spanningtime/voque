import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Register = React.createClass({

  render() {
    const styleInput = {
      marginLeft: '20px',
    };

    const styleUnderline = {
      borderColor: '#F4AF1D'
    }

    return <div className="content-container">
      <h1 className="main-header requests-title">Register</h1>
      <div className="register-container">
        <div className="email-input-container">
          <TextField
            style={styleInput}
            hintText="Email"
            underlineFocusStyle={styleUnderline}
          />
        </div>
        <div className="input-container">
        <TextField
          type="password"
          style={styleInput}
          hintText="Password"
          underlineFocusStyle={styleUnderline}
        />
        <TextField
          type="password"
          style={styleInput}
          hintText="Confirm Password"
          underlineFocusStyle={styleUnderline}
        />
        <TextField
          style={styleInput}
          hintText="First Name"
          underlineFocusStyle={styleUnderline}
        />
        <TextField
          style={styleInput}
          hintText="Last Name"
          underlineFocusStyle={styleUnderline}
        />
        </div>
        <RaisedButton
          label="Submit"
        />
      </div>
    </div>
  }
})

export default Register;

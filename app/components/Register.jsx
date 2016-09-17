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
      <h1 className="main-header title">Register</h1>
      <div className="register-container">
        <div className="email-input-container">
          <TextField
            style={styleInput}
            hintText="Email"
            underlineFocusStyle={styleUnderline}
          />
        </div>
        <div className="input-container">
        <div>
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
        </div>
        <div>
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
        </div>
        <div className="button-container">
          <RaisedButton
            label="Submit"
          />
        </div>
      </div>
    </div>
  }
})

export default Register;

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const Login = React.createClass({

  render() {
    const styleInput = {
      marginLeft: '20px',
    };

    const styleUnderline = {
      borderColor: '#F4AF1D'
    };

    return <div className="content-container">
      <h1 className="main-header title">
        Login
      </h1>
      <div className="login-container">
        <TextField
          style={styleInput}
          hintText="Email"
          underlineFocusStyle={styleUnderline}
        />
        <TextField
          style={styleInput}
          type="password"
          hintText="Password"
          underlineFocusStyle={styleUnderline}
        />
        <div className="button-container">
          <RaisedButton
            label="Submit"
          />
        </div>
      </div>
      <p className="register-message">Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  }
})

export default Login;

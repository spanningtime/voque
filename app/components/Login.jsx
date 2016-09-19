import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const Login = React.createClass({
  getInitialState() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    };
  },

  handleTouchTap() {
    this.props.login(this.state.credentials);
  },

  handleChange(event) {
    const { name, value } = event.target;
    const nextCredentials = Object.assign({}, this.state.credentials, {
      [name]: value
    });

    this.setState({ credentials: nextCredentials });
  },

  render() {
    const styleInput = {
      marginLeft: '20px',
    };

    const styleUnderline = {
      borderColor: '#F4AF1D'
    };

    const { credentials } = this.state;

    return <div className="content-container">
      <h1 className="main-header title">
        Login
      </h1>
      <div className="login-container">
        <TextField
          name="email"
          onChange={this.handleChange}
          style={styleInput}
          hintText="Email"
          underlineFocusStyle={styleUnderline}
          value={credentials.email}
        />
        <TextField
          name="password"
          onChange={this.handleChange}
          style={styleInput}
          type="password"
          hintText="Password"
          underlineFocusStyle={styleUnderline}
          value={credentials.password}
        />
        <div className="button-container">
          <RaisedButton
            label="Submit"
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </div>
      <p className="register-message">Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  }
})

export default Login;

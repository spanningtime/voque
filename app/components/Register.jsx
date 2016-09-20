import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Joi from 'joi';
import Checkbox from 'material-ui/Checkbox';

const Register = React.createClass({

  getInitialState() {
    return {
      user: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        kj: false
      }
    };
  },

  handleCheckbox() {
    if (!this.state.kj)
    this.setState({
      kj: true
    })
    else {
      this.setState({ kj: false })
    }
  },

  handleChange(event) {
    const { name, value } = event.target;
    const nextUser = Object.assign({},
      this.state.user, { [name]: value });
      this.setState({ user: nextUser });
  },

  handleTouchTap() {
    this.props.register(this.state.user);
  },

  render() {
    const styleInput = {
      marginLeft: '20px',
    };

    const styleUnderline = {
      borderColor: '#F4AF1D'
    };

    const styleCheckbox = {
      color: '#F4AF1D'
      // width: 100%
    };

    const { user } = this.state;

    return <div className="content-container">
      <h1 className="main-header title">Register</h1>
      <div className="checkbox-container">
        <Checkbox
          onCheck={this.handleCheckbox}
          label="Click this box if you are registering as a Karaoke DJ"
          inputStyle={styleCheckbox}
          labelPosition="left"
          checked={this.state.kj}
        />
      </div>
      <div className="register-container">
        <div className="email-input-container">
          <TextField
            hintText="Email"
            name="email"
            onChange={this.handleChange}
            style={styleInput}
            underlineFocusStyle={styleUnderline}
            value={user.email}
          />
        </div>
        <div className="input-container">
        <div>
        <TextField
          hintText="Password"
          name="password"
          onChange={this.handleChange}
          style={styleInput}
          type="password"
          underlineFocusStyle={styleUnderline}
          value={user.password}
        />
        <TextField
          hintText="Confirm Password"
          name="confirmPassword"
          style={styleInput}
          type="password"
          underlineFocusStyle={styleUnderline}
          value={user.confirmPassword}
        />
        </div>
        <div>
        <TextField
          name="firstName"
          hintText="First Name"
          onChange={this.handleChange}
          style={styleInput}
          underlineFocusStyle={styleUnderline}
          value={user.firstName}
        />
        <TextField
          name="lastName"
          hintText="Last Name"
          onChange={this.handleChange}
          style={styleInput}
          underlineFocusStyle={styleUnderline}
          value={user.lastName}
        />
        </div>
        </div>
        <div className="button-container">
          <RaisedButton
            label="Submit"
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </div>
    </div>
  }
})

export default Register;

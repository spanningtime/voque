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

// dom traversal to access checkbox
// document.getElementsByClassName('checkbox-container')[0].childNodes[0].lastChild.childNodes[1].childNodes[0].childNodes

  handleCheckbox() {
    const nextUser = Object.assign(this.state.user, {kj: !this.state.user.kj})

    this.setState({
      user: nextUser
    })
  },

  handleChange(event) {
    const { name, value } = event.target;
    const nextUser = Object.assign({},
      this.state.user, { [name]: value });
      this.setState({ user: nextUser });
  },

  handleTouchTap() {
    console.log(this.state.user);
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
    };

    const { user } = this.state;

    return <div className="content-container">
      <h1 className="main-header title">Register</h1>
      <div className="checkbox-container">
        <Checkbox
          onCheck={this.handleCheckbox}
          label="Click this box to register as a Karaoke DJ"
          inputStyle={styleCheckbox}
          labelPosition="left"
          checked={this.state.user.kj}
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

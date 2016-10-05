import cookie from 'react-cookie';
import DrawerMenu from 'components/DrawerMenu';
import { Link } from 'react-router';
import React from 'react';

const NavBar = React.createClass({

  render() {
    const styleLink = {
      textDecoration: 'none',
      color: 'white'
    };

    const styleLoginLink = {
      display: 'inline-block'
    };

    const styleLogoutLink = {
      display: 'none'
    };

    if (cookie.load('loggedIn')) {
      styleLoginLink.display = 'none';
      styleLogoutLink.display = 'inline-block';
    }

    return <div className="nav-container">
      <div className="nav-bar">
        <header className="title-logo">
          <Link style={styleLink} to="/songlist" >
            VOQUE
          </Link>
        </header>
        <Link to="/">
          <img className="mic" src={'./images/mic.svg'} />
        </Link>
        <div className="link-container">
          <div className="divider" />
          <div className="nav-login-container">
            <Link
              className="login"
              style={styleLoginLink}
              to="/login"
            >
              Login
            </Link>
          </div>
          <div className="nav-logout-container">
            <Link
              className="logout"
              onTouchTap={this.props.logout}
              style={styleLogoutLink}
            >
              Logout
            </Link>
          </div>
          <DrawerMenu
            getSongs={this.props.getSongs}
            handleClose={this.props.handleClose}
            handleToggle={this.props.handleToggle}
            logout={this.props.logout}
            open={this.props.open}
            requestChange={this.props.requestChange}
            songs={this.props.songs}
          />
        </div>
      </div>
    </div>;
  }
});

export default NavBar;

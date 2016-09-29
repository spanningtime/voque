import React from 'react';
import DrawerMenu from 'components/DrawerMenu';
import { Link } from 'react-router';
import cookie from 'react-cookie';

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
    }

    if (cookie.load('loggedIn')) {
      styleLoginLink.display = 'none',
      styleLogoutLink.display = 'inline-block'
    };

    return <div className="nav-container">
      <div className="nav-bar">
        <header className="title-logo">
          <Link to="/songlist" style={styleLink}>
            VOQUE
          </Link>
        </header>
        <Link to="/">
          <img className="mic" src={'./images/mic.svg'} />
        </Link>
        <div className="link-container">
        <div className="divider"></div>
          <div className="nav-login-container">
            <Link
              className="login"
              to="/login"
              style={styleLoginLink}>
                Login
            </Link>
          </div>
          <div className="nav-logout-container">
            <Link
              onTouchTap={this.props.logout}
              className="logout"
              style={styleLogoutLink}>
                Logout
            </Link>
          </div>
          <DrawerMenu
            handleToggle={this.props.handleToggle}
            open={this.props.open}
            requestChange={this.props.requestChange}
            handleClose={this.props.handleClose}
            logout={this.props.logout}
            songs={this.props.songs}
            getSongs={this.props.getSongs}
           />
        </div>
      </div>
    </div>
  }
})

export default NavBar;

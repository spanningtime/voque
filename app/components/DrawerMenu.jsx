import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import cookie from 'react-cookie';

const DrawerMenu = React.createClass({

  render() {

    const styleMenuLogin = {
      display: 'none'
    };

    const styleMenuLink = {
      textDecoration: 'none'
    };

    const styleMenuItem = {
      display: 'block'
    };

    if (!cookie.load('loggedIn')) {
      styleMenuLogin.display = 'inline-block',
      styleMenuItem.display = 'none'
    };

    return <div>
      <img
        className="menu-icon"src={'./images/menu.svg'}
        onTouchTap={this.props.handleToggle}
      />
      <Drawer
        docked={false}
        openSecondary={true}
        width={200}
        open={this.props.open}
        onRequestChange={(open) => this.props.requestChange(open)}
      >
      <Link
        to="/login"
        style={styleMenuLink}>
        <MenuItem
          style={styleMenuLogin}
          onTouchTap={this.props.handleClose}>Login</MenuItem>
      </Link>
        <Link
          to="/songlist"
          style={styleMenuItem}>
          <MenuItem
            style={styleMenuItem}
            onTouchTap={this.props.handleClose}>Home</MenuItem>
        </Link>
        <Link
          style={styleMenuItem}>
          <MenuItem onTouchTap={this.props.logout}>Logout</MenuItem>
        </Link>
      </Drawer>
    </div>
  }
})

export default DrawerMenu;

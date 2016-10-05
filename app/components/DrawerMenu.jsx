import { Link, withRouter } from 'react-router';
import cookie from 'react-cookie';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';

const DrawerMenu = React.createClass({

  handleTouchTap() {
    this.props.handleClose();
    if (this.props.songs.length !== 0) {
      this.props.router.push('/songlist');
    }
    else {
      return this.props.router.push('/access');
    }
  },

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
      styleMenuLogin.display = 'inline-block';
      styleMenuItem.display = 'none';
    }

    return <div>
      <img
        className="menu-icon"
        onTouchTap={this.props.handleToggle}
        src={'./images/menu.svg'}
      />
      <Drawer
        docked={false}
        getSongs={this.props.getSongs}
        onRequestChange={(open) => this.props.requestChange(open)}
        open={this.props.open}
        openSecondary={true}
        width={200}
      >
        <Link
          style={styleMenuLink}
          to="/login"
        >
          <MenuItem
            onTouchTap={this.props.handleClose}
            style={styleMenuLogin}
          >
            Login
          </MenuItem>
        </Link>
        <MenuItem
          onTouchTap={this.handleTouchTap}
          style={styleMenuItem}
        >
          Home
        </MenuItem>
        <Link
          style={styleMenuItem}
        >
          <MenuItem onTouchTap={this.props.logout}>
            Logout
          </MenuItem>
        </Link>
      </Drawer>
    </div>;
  }
});

export default withRouter(DrawerMenu);

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

const DrawerMenu = React.createClass({

  render() {
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
        <Link to="/songlist">
          <MenuItem onTouchTap={this.props.handleClose}>Home</MenuItem>
        </Link>
        <Link to="/">
        <MenuItem onTouchTap={this.props.handleClose}>Logout</MenuItem>
        </Link>
      </Drawer>
    </div>
  }
})

export default DrawerMenu;

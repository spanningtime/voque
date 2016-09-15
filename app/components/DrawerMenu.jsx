import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router';

const DrawerMenu = React.createClass({

  handleClose() {
    this.props.closeDrawer();
  },

  render() {
    return <div>
      <img
        className="menu-icon"src={'./images/menu.svg'}
        onTouchTap={this.props.handleToggle}
      />
      <Drawer
        docked={false}
        width={200}
        open={this.props.open}
        onRequestChange={(open) => this.props.requestChange(open)}
      >
        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Logout</MenuItem>
      </Drawer>
    </div>
  }
})

export default DrawerMenu;

import React from 'react';
import DrawerMenu from 'components/DrawerMenu';




const NavBar = React.createClass({

  render() {
    return <div className="nav-container">
      <div className="nav-bar">
        <header className="title">VOQUE</header>
        <img className="mic" src={'./images/mic.svg'} />
        <div className="link-container">
          <a className="login" href="#">Login</a>
          <DrawerMenu
            handleToggle={this.props.handleToggle}
            open={this.props.open}
            requestChange={this.props.requestChange}
            handleClose={this.props.handleClose}
           />
        </div>
      </div>
    </div>
  }
})

export default NavBar;

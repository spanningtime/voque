import React from 'react';
import DrawerMenu from 'components/DrawerMenu';
import { Link } from 'react-router';

const NavBar = React.createClass({

  render() {
    const styleLink = {
      textDecoration: 'none',
      color: 'white'
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
          <Link className="login" to="/login">Login</Link>
          <DrawerMenu
            handleToggle={this.props.handleToggle}
            open={this.props.open}
            requestChange={this.props.requestChange}
            handleClose={this.props.handleClose}
            logout={this.props.logout}
           />
        </div>
      </div>
    </div>
  }
})

export default NavBar;

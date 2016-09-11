import React from 'react';


const NavBar = React.createClass({


  render() {
    return <div className="nav-container">
      <div className="nav-bar">
        <header className="title">VOQUE</header>
        <img className="mic" src={'./images/mic.svg'} />
        <div className="link-container">
          <a className="login" href="#">Login</a>
          <img className="menu-icon"src={'./images/menu.svg'} />
        </div>
      </div>
    </div>
  }
})

export default NavBar;

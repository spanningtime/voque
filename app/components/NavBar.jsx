import React from 'react';


const NavBar = React.createClass({


  render() {
    return <div className="nav-container">
      <div className="nav-bar">
        <header>VOQUE</header>
        <img src={'./images/mic.svg'} />
        <div className="link-container">
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  }
})

export default NavBar;

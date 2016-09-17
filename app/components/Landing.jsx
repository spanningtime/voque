import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


const Landing = React.createClass({


  render() {
    return <div className="content-container">
      <div>

        <h1 className="main-header">
          Ditch those <span>huge</span> and <span>unorganized</span> karaoke songbooks
        </h1>

        <h2 className="second-header">
          Search and request songs from your phone
        </h2>

        <div className="outer-circle">
          <div className="circle">
            <img className="phone-icon"src={'./images/phone.svg'} />
          </div>
        </div>

        <h3 className="third-header">Sign up for free!</h3>

        <div className="buttons-container">
          <div>
            <Link to="/register">
              <RaisedButton
                label="Singers"
                className="button"
              />
            </Link>
          </div>
          <div>
            <Link to="/info">
              <RaisedButton label="Karaoke DJs"
                className="button" />
            </Link>
          </div>
        </div>

        <p>Already have an account? <a href="#">Login</a></p>
      </div>
    </div>
  }
})

export default Landing;

import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const Landing = React.createClass({

  render() {
    return <div className="content-container">
      <div>

        {/* eslint-disable max-len */}
        <h1 className="main-header">
          Ditch those <span>huge</span> and <span>unorganized</span> karaoke songbooks
        </h1>
        {/* eslint-enable max-len */}

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
                className="button"
                label="Singers"
              />
            </Link>
          </div>
          <div>
            <Link to="/info">
              <RaisedButton
                className="button"
                label="Karaoke DJs"
              />
            </Link>
          </div>
        </div>

        <p className="login-message">
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>;
  }
});

export default Landing;

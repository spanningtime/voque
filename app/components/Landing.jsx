import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const Landing = React.createClass({


  render() {
    return <div className="content-container">
      <div>

        <h1 className="main-header">
          Ditch those huge and unorganized karaoke songbooks
        </h1>

        <h2 className="second-header">
          Search and request songs from your phone
        </h2>

        <h3 className="third-header">Sign up for free!</h3>

        <div className="buttons-container">
          <div className="singers">
            <RaisedButton className="button" label="Singers" />
          </div>

          <div className="kjs">
            <RaisedButton className="button" label="Karaoke DJs" />
          </div>
        </div>

        <p>Already have an account? <a href="#">Login</a></p>

      </div>
    </div>
  }
})

export default Landing;

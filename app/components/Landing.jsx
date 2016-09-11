import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const Landing = React.createClass({


  render() {
    return <div className="content-container">
      <div>

        <h1>
          Ditch the huge and unorganized karaoke songbooks
        </h1>

        <h2>
          Search and request songs from your phone
        </h2>

        <div className="singers">
          Singers <RaisedButton label="Register" />
        </div>

        <div className="kjs">
          Karaoke DJs <RaisedButton label="Learn More" />
        </div>

      </div>
    </div>
  }
})

export default Landing;

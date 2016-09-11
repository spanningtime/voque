import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';
import NavBar from 'components/NavBar';
import Landing from 'components/Landing';


const App = React.createClass({


  render() {
    return <main>
      <NavBar />
        <div className="app-container">
          <Landing />
      </div>
    </main>;
  }
});

export default withRouter(App);

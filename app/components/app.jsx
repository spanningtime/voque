import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';
import NavBar from 'components/NavBar';
import Landing from 'components/Landing';


const App = React.createClass({


  render() {
    return <main>
      <NavBar />
        <Landing />
    </main>;
  }
});

export default withRouter(App);

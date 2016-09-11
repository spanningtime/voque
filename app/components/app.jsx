import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';
import NavBar from 'components/NavBar';


const App = React.createClass({


  render() {
    return <main>
      <NavBar />
    </main>;
  }
});

export default withRouter(App);

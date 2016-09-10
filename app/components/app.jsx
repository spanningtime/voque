import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';
import NavBar from 'components/NavBar';


const App = React.createClass({


  render() {
    return <div>
      <NavBar />
      hey
    </div>;
  }
});

export default withRouter(App);

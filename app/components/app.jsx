import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';


const App = React.createClass({


  render() {
    return <main>
      <NavBar />
      <Footer />
    </main>;
  }
});

export default withRouter(App);

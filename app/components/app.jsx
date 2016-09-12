import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';
import NavBar from 'components/NavBar';



const App = React.createClass({

  getInitialState() {
    return {
      open: false,
    };
  },

  toggleDrawer() {
    this.setState({ open: !this.state.open })
  },

  closeDrawer() {
    this.setState({ open: false});
  },

  requestChange() {
    this.setState({ open })
  },

  render() {
    return <main>
      <NavBar />
        <div className="app-container">
      </div>

      {React.cloneElement(this.props.children, {
        open: this.state.open,
        toggleDrawer: this.toggleDrawer,
        closeDrawer: this.closeDrawer,
      })}
      <footer id="footer"></footer>
    </main>;
  }
});

export default withRouter(App);

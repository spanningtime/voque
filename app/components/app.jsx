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

  handleToggle() {
    console.log('toggle works');
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
      <NavBar
        handleToggle={this.handleToggle}
      />
        <div className="app-container">
      </div>

      {React.cloneElement(this.props.children, {
        open: this.state.open,
        handleToggle: this.handleToggle,
        closeDrawer: this.closeDrawer,
        requestChange: this.requestChange
      })}
      <footer id="footer"></footer>
    </main>;
  }
});

export default withRouter(App);

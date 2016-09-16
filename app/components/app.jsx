import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';
import NavBar from 'components/NavBar';



const App = React.createClass({

  getInitialState() {
    return {
      open: false,
      songs: [
        {
          artist: "Whitney Houston",
          title: "'I Wanna Dance...'"
        },
        {
          artist: "The Pixies",
          title: "Hey"
        },
        {
          artist: "Limp Bizkit",
          title: "Nookie"
        },
        {
          artist: "Korn",
          title: "Make Me Bad"
        },
        {
          artist: "Whitney Houston",
          title: "I Wanna Dance..."
        },
        {
          artist: "The Pixies",
          title: "Hey"
        },
        {
          artist: "Limp Bizkit",
          title: "Nookie"
        },
        {
          artist: "Korn",
          title: "Make Me Bad"
        },
        {
          artist: "Whitney Houston",
          title: "I Wanna Dance..."
        },
        {
          artist: "The Pixies",
          title: "Hey"
        },
        {
          artist: "Limp Bizkit",
          title: "Nookie"
        },
        {
          artist: "Korn",
          title: "Make Me Bad"
        },
        {
          artist: "Whitney Houston",
          title: "I Wanna Dance..."
        },
        {
          artist: "The Pixies",
          title: "Hey"
        },
        {
          artist: "Limp Bizkit",
          title: "Nookie"
        },
        {
          artist: "Korn",
          title: "Make Me Bad"
        },
        {
          artist: "Whitney Houston",
          title: "I Wanna Dance..."
        },
        {
          artist: "The Pixies",
          title: "Hey"
        },
        {
          artist: "Limp Bizkit",
          title: "Nookie"
        },
        {
          artist: "Korn",
          title: "Make Me Bad"
        },
        {
          artist: "Whitney Houston",
          title: "I Wanna Dance..."
        },
        {
          artist: "The Pixies",
          title: "Hey"
        },
        {
          artist: "Limp Bizkit",
          title: "Nookie"
        },
        {
          artist: "Korn",
          title: "Make Me Bad"
        }
      ],
      requests: [
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
        {
          singer: "Donna",
          title: "Hey",
          artist: "The Pixies"
        },
        {
          singer: "William",
          title: "I Wanna Dance With Somebody",
          artist: "Whitney Houston"
        },
        {
          singer: "Hank The Tank",
          title: "Summer Girls",
          artist: "LFO"
        },
      ]
    };
  },

  handleToggle() {
    this.setState({ open: !this.state.open })
  },

  handleClose() {
    console.log('close')
    this.setState({ open: false});
  },

  requestChange(open) {
    this.setState({ open })
  },

  render() {
    return <main>
      <NavBar
        handleToggle={this.handleToggle}
        open={this.state.open}
        requestChange={this.requestChange}
        handleClose={this.handleClose}
      />
        <div className="app-container">
      </div>

      {React.cloneElement(this.props.children, {
        open: this.state.open,
        handleToggle: this.handleToggle,
        handleClose: this.handleClose,
        requestChange: this.requestChange,
        songs: this.state.songs,
        requests: this.state.requests
      })}
      <footer id="footer"></footer>
    </main>;
  }
});

export default withRouter(App);

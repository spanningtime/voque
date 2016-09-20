import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { withRouter } from 'react-router';
import NavBar from 'components/NavBar';
import axios from 'axios';
import cookie from 'react-cookie';
import Snackbar from 'material-ui/Snackbar';



const App = React.createClass({

  getInitialState() {
    return {
      open: false,
      user: {},
      requestArtist: '',
      requestSong: '',
      songs: [
        {
          artist: "Whitney Houston",
          title: "'I Wanna Dance With Somebody'"
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
          title: "I Wanna Dance With So...",
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

  requestSong(requestedSong) {
    console.log(requestedSong)
    this.setState({
      requestSong: requestedSong.title,
      requestArtist: requestedSong.artist
    });

    axios.post(`/api/requests/1`, req)
      .then((req) => {

      })
  },

  getUser() {
    const userId = cookie.load('userId');
    console.log(userId);

    axios.get(`/api/users/${userId}`)
      .then((res) => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      })
      .catch((err) => {
        console.error(err);
      })
  },

  login(credentials) {
    axios.post('/api/token', credentials)
      .then((res) => {
        this.getUser();

        return this.props.router.push('/access');
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({ loginSnackbarOpen: true });
        }
        else {
          console.log('this is an error')
        }
      });
  },

  logout() {
    axios.delete('/api/token')
      .then(() => {
        this.handleClose();
        this.props.router.push('/');
      })
      .catch((err) => {
        console.error(err);
      });
  },

  register(user) {
    console.log(user)
    axios.post('/api/users', user)
      .then((res) => {
        this.getUser();
        return this.props.router.push('/access');
      })
      .catch((err) => {
        console.error(err);
      });
  },

  removeRequest(event) {
    this.setState = this.state.requests.filter((event) => {
      if (event.target) {
        return false;
      }
    })
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
        logout={this.logout}
      />
        <div className="app-container">
      </div>

      {React.cloneElement(this.props.children, {
        open: this.state.open,
        handleToggle: this.handleToggle,
        handleClose: this.handleClose,
        requestChange: this.requestChange,
        songs: this.state.songs,
        register: this.register,
        requests: this.state.requests,
        removeRequest: this.removeRequest,
        user: this.state.user,
        login: this.login,
        requestArtist: this.state.artist,
        requestSong: this.requestSong,
        logout: this.logout
      })}
      <footer id="footer"></footer>
    </main>;
  }
});

export default withRouter(App);

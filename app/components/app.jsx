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
      codeSnackbarOpen: false,
      loginSuccessSnackbarOpen: false,
      logoutSuccessSnackbarOpen: false,
      loginFailSnackbarOpen: false,
      open: false,
      user: {},
      requestedSong: {},
      lyrics: '',
      songs: [],
      requests: []
    };
  },

  getRequests() {
    axios.get('/api/requests/1')
      .then((response) => {
        this.setState({
          requests: response.data
        })
      });
  },

  getLyrics() {
    const apiKey = '14685231d67e7ec9fe1bc89da7b6105b';
    const artist = this.state.requestedSong.artistName;
    const title = this.state.requestedSong.songTitle;
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&q_artist=${artist}&q_track=${title}&format=json&page_size=1&f_has_lyrics=1`)
      .then((trackData) => {
        const trackId = trackData.data.message.body.track_list[0].track.track_id;
        return axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${apiKey}&track_id=${trackId}`)
          .then((lyricsData) => {
            const lyricsUnfiltered = lyricsData.data.message.body.lyrics.lyrics_body;
            const lyrics = lyricsUnfiltered.substring(0, lyricsUnfiltered.length - 58);
            // console.log(lyrics.substring(0,lyrics.length - 58))
            this.setState({
              lyrics
            })
          })
      })
      .catch((err) => {
        console.error(err)
      });
  },

  requestSong(requestedSong) {
    this.setState({
      requestedSong
    });
    axios.post(`/api/requests/1`, requestedSong)
      .then(() => {
        this.getLyrics();
      })
      .catch((err) => {
        console.error(err);
      })
  },

  getUser() {
    const userId = cookie.load('userId');

    axios.get(`/api/users/${userId}`)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.error(err);
      })
  },

  getSongs(code) {
    axios.get(`/api/users/code/${code}`)
      .then((response) => {
        const array = response.data.filter((user) => {
          return user.code === this.state.code;
        })
        this.setState({
          songs: array
        })
        return this.props.router.push('/songlist');
      })
      .catch((err) => {
        if (err.response.status !== 200) {
          this.setState({ codeSnackbarOpen: true });
          setTimeout(function() { this.setState({ codeSnackbarOpen: false }); }.bind(this), 4000);
        }
      });
  },

  login(credentials) {
    axios.post('/api/token', credentials)
      .then((res) => {
        this.getUser();
        this.props.router.push('/access');
        this.setState({ loginSuccessSnackbarOpen: true });
        setTimeout(function() { this.setState({ loginSuccessSnackbarOpen: false }); }.bind(this), 4000);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({ loginFailSnackbarOpen: true });
        setTimeout(function() { this.setState({ loginFailSnackbarOpen: false }); }.bind(this), 4000);
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
        this.setState({ logoutSuccessSnackbarOpen: true });
        setTimeout(function() { this.setState({ logoutSuccessSnackbarOpen: false }); }.bind(this), 4000);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  register(user) {
    axios.post('/api/users', user)
      .then((res) => {
        this.getUser();
        return this.props.router.push('/access');
      })
      .catch((err) => {
        console.error(err);
      });
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

    const styleFailSnackbar = {
      backgroundColor: '#df2329',
      textAlign: 'center',
      height: '55px'
    };

    const styleSuccessSnackbar = {
      backgroundColor: '#f4af1d',
      textAlign: 'center',
      height: '55px'
    };

    return <main>
      <NavBar
        handleToggle={this.handleToggle}
        open={this.state.open}
        requestChange={this.requestChange}
        handleClose={this.handleClose}
        logout={this.logout}
        songs={this.state.songs}
        getSongs={this.props.getSongs}
      />
        <div className="app-container">
      </div>

      <Snackbar
        bodyStyle={styleFailSnackbar}
        message="INVALID CODE! Ask your KJ for their access code"
        open={this.state.codeSnackbarOpen}
      />

      <Snackbar
        bodyStyle={styleSuccessSnackbar}
        message={`Welcome, ${this.state.user.firstName}!`}
        open={this.state.loginSuccessSnackbarOpen}
      />

      <Snackbar
        bodyStyle={styleFailSnackbar}
        message="Login unsuccessful"
        open={this.state.loginFailSnackbarOpen}
      />

      <Snackbar
        bodyStyle={styleSuccessSnackbar}
        message="You have been successfully logged out"
        open={this.state.logoutSuccessSnackbarOpen}
      />


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
        logout: this.logout,
        getSongs: this.getSongs,
        requestedSong: this.state.requestedSong,
        getLyrics: this.getLyrics,
        lyrics: this.state.lyrics,
        getRequests: this.getRequests
      })}
      <footer id="footer"></footer>
    </main>;
  }
});

export default withRouter(App);

import React from 'react';
import TextField from 'material-ui/TextField';
import weakKey from 'weak-key';
import { withRouter } from 'react-router';

const SongList = React.createClass({
  getInitialState() {
    return {
      selected: 'artistName',
      searchText: '',
      filterSearch: false,
      selectedSong: null
    };
  },

  handleTouchTap() {
    this.props.requestSong(this.state.selectedSong);
    this.props.router.push('/thanks');
  },

  handleToggleSubmitBtn(song) {
    this.setState({
      selectedSong: song
    });
  },

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  },

  handleToggleTab(newSelected) {
    this.setState({ selected: newSelected });
  },

  render() {
    const inputStyle = {
      borderColor: '#F4AF1D'
    };

    const styleTabDeselected = {
      opacity: 0.5
    };

    const styleTabSelected = {
      opacity: 1.0
    };

    const styleSubmitButton = {
      display: 'inline-block'
    };

    const styleHideSubmitButton = {
      display: 'none'
    };

    const songsArray = this.props.songs.filter((song) => {
      if (this.state.searchText.length === 0) {
        return song['artistName'].toLowerCase().startsWith('a')
      }

      return song[this.state.selected].toLowerCase().startsWith(this.state.searchText.toLowerCase());
    });

    return <div className="content-container">
      <div className="header-container">
        <h1 className="kj-name title">
          {`${this.props.kjName}'s Songs`}
        </h1>
        <div
          className="mobile-search-container"
        >
          <div
            id="mobile-artist-tab"
            onTouchTap={() => this.handleToggleTab('artistName')}
            style={this.state.selected === 'artistName' ? styleTabSelected : styleTabDeselected}
          >
            <span>Artist</span>
          </div>
          <div
            id="mobile-title-tab"
            onTouchTap={() => this.handleToggleTab("songTitle")}
            style={this.state.selected === "songTitle" ? styleTabSelected : styleTabDeselected}
          >
            <span>Title</span>
          </div>
        </div>
        <div id="alphabet">
        <ol>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
        <li>f</li>
        <li>g</li>
        <li>h</li>
        <li>i</li>
        <li>j</li>
        <li>k</li>
        <li>l</li>
        <li>m</li>
        <li>n</li>
        <li>o</li>
        <li>p</li>
        <li>q</li>
        <li>r</li>
        <li>s</li>
        <li>t</li>
        <li>u</li>
        <li>v</li>
        <li>w</li>
        <li>x</li>
        <li>y</li>
        <li>z</li>
        </ol>
        </div>
        <div className="search-container">
          <div
            id="artist-tab"
            onTouchTap={() => this.handleToggleTab('artistName')}
            style={this.state.selected === 'artistName' ? styleTabSelected : styleTabDeselected}
          >
            <span>Artist</span></div>
          <div
            id="title-tab"
            onTouchTap={() => this.handleToggleTab('songTitle')}
          >
            <span>Title</span>
          </div>
          <TextField
            id="searchInput"
            onChange={this.handleChange}
            underlineFocusStyle={inputStyle}
          />
          <img className="search-icon"src={'./images/search.svg'} />
        </div>
      </div>
      <div className="songs-container">
        <ol>
          {songsArray.map((song) => {
            return <li
              key={weakKey(song)}
            >
              <div className="song-container">
                <div className="slidein-container">
                  <div
                    className="border-container"
                    onTouchTap={(() => this.handleToggleSubmitBtn(song)).bind(this)}
                  >
                    <div
                      className="title-container"
                    >
                      {song.songTitle}
                    </div>
                    <div
                      className="artist-container"
                    >
                      {song.artistName}
                    </div>
                  </div>
                  <div
                    className="request-submit"
                    name="request-submit"
                    onTouchTap={this.handleTouchTap}
                    style={song === this.state.selectedSong ? styleSubmitButton : styleHideSubmitButton}>submit
                  </div>
                </div>
              </div>
            </li>;
          })}
        </ol>
      </div>
    </div>;
  }
});

export default withRouter(SongList);

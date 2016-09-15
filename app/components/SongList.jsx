import React from 'react';
import TextField from 'material-ui/TextField';

const SongList = React.createClass({
  getInitialState() {
    return {
      selected: "artist"
    }
  },

  handleToggleTab(newSelected) {
    this.setState({ selected: newSelected})
  },

  render() {
    const inputStyle = {
      borderColor: '#F4AF1D',
    };

    const styleTabDeselected = {
      opacity: 0.5
    };

    const styleTabSelected = {
      opacity: 1.0
    };

    return <div className="content-container">
      <div className="header-container">
        <h1 className="kj-name">
          Donnie's Songs
        </h1>
        <div
          className="mobile-search-container">
          <div
            id="mobile-artist-tab"
            onTouchTap={() =>  this.handleToggleTab("artist")}
            style={this.state.selected === "artist" ? styleTabSelected : styleTabDeselected} >
            <span>Artist</span>
          </div>
          <div
            id="mobile-title-tab"
            onTouchTap={() => this.handleToggleTab("title")}
            style={this.state.selected === "title" ? styleTabSelected : styleTabDeselected} >
          <span>Title</span></div>
        </div>
        <div className="search-container">
          <div id="artist-tab"><span>Artist</span></div>
          <div id="title-tab"><span>Title</span></div>
            <TextField
              underlineFocusStyle={inputStyle}
            />
            <img className="search-icon"src={'./images/search.svg'} />
        </div>
      </div>
      <div className="songs-container">
        <ol>
          <li>
            <span className="artist">Whitney Houston</span>
            <span className="song-title">I Wanna Dance...</span>
          </li>
          <li>
            <span className="artist">The Pixies</span>
            <span className="song-title">Hey</span>
          </li>
          <li>
            <span className="artist">Limp Bizkit</span>
            <span className="song-title">Nookie</span>
          </li>
          <li>
            <span className="artist">Korn</span>
            <span className="song-title">Make Me Bad</span>
          </li>
          <li>
            <span className="artist">Whitney Houston</span>
            <span className="song-title">I Wanna Dance...</span>
          </li>
          <li>
            <span className="artist">The Pixies</span>
            <span className="song-title">Hey</span>
          </li>
          <li>
            <span className="artist">Limp Bizkit</span>
            <span className="song-title">Nookie</span>
          </li>
          <li>
            <span className="artist">Korn</span>
            <span className="song-title">Make Me Bad</span>
          </li>
          <li>
            <span className="artist">Whitney Houston</span>
            <span className="song-title">I Wanna Dance...</span>
          </li>
          <li>
            <span className="artist">The Pixies</span>
            <span className="song-title">Hey</span>
          </li>
          <li>
            <span className="artist">Limp Bizkit</span>
            <span className="song-title">Nookie</span>
          </li>
          <li>
            <span className="artist">Korn</span>
            <span className="song-title">Make Me Bad</span>
          </li>
          <li>
            <span className="artist">Whitney Houston</span>
            <span className="song-title">I Wanna Dance...</span>
          </li>
          <li>
            <span className="artist">The Pixies</span>
            <span className="song-title">Hey</span>
          </li>
          <li>
            <span className="artist">Limp Bizkit</span>
            <span className="song-title">Nookie</span>
          </li>
          <li>
            <span className="artist">Korn</span>
            <span className="song-title">Make Me Bad</span>
          </li>
          <li>
            <span className="artist">Whitney Houston</span>
            <span className="song-title">I Wanna Dance...</span>
          </li>
          <li>
            <span className="artist">The Pixies</span>
            <span className="song-title">Hey</span>
          </li>
          <li>
            <span className="artist">Limp Bizkit</span>
            <span className="song-title">Nookie</span>
          </li>
          <li>
            <span className="artist">Korn</span>
            <span className="song-title">Make Me Bad</span>
          </li>
          <li>
            <span className="artist">Whitney Houston</span>
            <span className="song-title">I Wanna Dance...</span>
          </li>
          <li>
            <span className="artist">The Pixies</span>
            <span className="song-title">Hey</span>
          </li>
          <li>
            <span className="artist">Limp Bizkit</span>
            <span className="song-title">Nookie</span>
          </li>
          <li>
            <span className="artist">Korn</span>
            <span className="song-title">Make Me Bad</span>
          </li>
          <li>
            <span className="artist">Whitney Houston</span>
            <span className="song-title">I Wanna Dance...</span>
          </li>
          <li>
            <span className="artist">The Pixies</span>
            <span className="song-title">Hey</span>
          </li>
          <li>
            <span className="artist">Limp Bizkit</span>
            <span className="song-title">Nookie</span>
          </li>
          <li>
            <span className="artist">Korn</span>
            <span className="song-title">Make Me Bad</span>
          </li>
        </ol>
      </div>
    </div>
  }
})

export default SongList;

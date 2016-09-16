import React from 'react';
import TextField from 'material-ui/TextField';
import weakKey from 'weak-key';

const SongList = React.createClass({
  getInitialState() {
    return {
      selected: "artist",
      searchText: "",
      filterSearch: false
    }
  },

  handleChange(event) {
    this.setState({ searchText: event.target.value });
    console.log(this.state.searchText)
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

    const songsArray = this.props.songs.filter((song) => {
      if (this.state.searchText.length === 0) {
        return true;
      }
      return song[this.state.selected].toLowerCase().startsWith(this.state.searchText.toLowerCase());
    })

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
          <div id="artist-tab"
               onTouchTap={() => this.handleToggleTab("artist")}
               style={this.state.selected === "artist" ? styleTabSelected : styleTabDeselected} >
            <span>Artist</span></div>
          <div id="title-tab"
                onTouchTap={() => this.handleToggleTab("title")}
                >
              <span>Title</span></div>
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

            return <li key={weakKey(song)}>
              <span
                className="artist">{song.artist}</span>
              <span
                className="song-title">{song.title}</span>
            </li>
          })}
        </ol>
      </div>
    </div>
  }
})

export default SongList;

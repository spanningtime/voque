import React from 'react';
import TextField from 'material-ui/TextField';
import weakKey from 'weak-key';

const SongList = React.createClass({
  getInitialState() {
    return {
      selected: "artist",
      searchText: "",
      filterSearch: false,
      toggleSubmitBtn: "inline-block",
    }
  },

  handleToggleSubmitBtn(event) {
    const slideContainer = event.target.parentElement.parentElement

    if (this.state.toggleSubmitBtn === "none") {
      this.setState({ toggleSubmitBtn: "inlineBlock"})
    }


    this.setState({ toggleSubmitBtn: btnDisplay });
    console.log(btnDisplay)


    // const slideContainer = event.target.parentElement.parentElement;
    // const submitBtn = slideContainer.lastElementChild;
    // if (submitBtn.style.display === "none")
    // submitBtn.style.display="inline-block";
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

    const styleSubmitButton = {
      display: this.state.toggleSubmitBtn
    };

    const styleHideSubmitButton = {
      display: 'hidden'
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

            return <li
              key={weakKey(song)}>
              <div className="song-container">
              {/* <i className="material-icons"
              >done</i> */}
                <div className="slidein-container">
                  <div
                    className="border-container"
                    onTouchTap={this.handleToggleSubmitBtn}
                  >
                    <div
                      className="title-container">{song.title}</div>
                      <div
                      className="artist-container">{song.artist}</div>
                  </div>
                  <div
                    name="request-submit"
                    className="request-submit"
                    style={styleSubmitButton}>submit</div>
                </div>
              </div>
            </li>
          })}
        </ol>
      </div>
    </div>
  }
})

export default SongList;

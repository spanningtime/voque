import React from 'react';
import TextField from 'material-ui/TextField';

const SongList = React.createClass({

  render() {
    const inputStyle = {
      borderColor: '#F4AF1D',
    };

    return <div className="content-container">
      <div className="header-container">
        <h1 className="kj-name">
          Donnie's Songs
        </h1>
        <div className="mobile-search-container">
          <div id="mobile-artist-tab"><span>Artist</span></div>
          <div id="mobile-title-tab"><span>Title</span></div>
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
            <span className="title">I Wanna Dance With Somebody</span>
          </li>
        </ol>
      </div>
    </div>
  }
})

export default SongList;

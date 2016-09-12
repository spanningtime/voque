import React from 'react';
import TextField from 'material-ui/TextField';


const SongList = React.createClass({

  render() {
    const inputStyle = {
      borderColor: '#F4AF1D'
    };

    return <div className="content-container">
      <div className="header-container">
        <h1 className="kj-name">
          Donnie's Songs
        </h1>
        <div className="search-container">
          <div id="artist-tab"><span>Artist</span></div>
          <div id="title-tab"><span>Title</span></div>
          <TextField
            className='song-search'
            underlineFocusStyle={inputStyle}
          />
          <img className="search-icon"src={'./images/search.svg'} />
        </div>
      </div>
      <div className="songs-container">

      </div>
    </div>
  }
})

export default SongList;

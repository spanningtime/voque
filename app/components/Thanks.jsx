import React from 'react';
import { Link, withRouter } from 'react-router';


// EXAMPLE API call for track id
//'http://api.musixmatch.com/ws/1.1/track.search?apikey=14685231d67e7ec9fe1bc89da7b6105b&q_artist=queen&q_track=we%20are%20the%20champions&format=json&page_size=1&f_has_lyrics=1'

//
//'http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=14685231d67e7ec9fe1bc89da7b6105b&track_id=85217814'

const Thanks = React.createClass({

  goBack() {
    this.props.router.goBack();
  },

  render() {

    return <div className="content-container">
      <div className="thanks-container">
      <div className="back-container">
        <span className="back-btn"
          onTouchTap={this.goBack}>
          <img className="back-arrow" src={'./images/arrow.svg'} />
        </span>
      </div>
        <h1 className="main-header">
          Thanks for the request!
        </h1>
        <h2 className="second-header">
            While you wait, take a look at the lyrics for <br/>
             <span className="lyrics-title">{this.props.requestedSong.songTitle}</span>
        </h2>
      </div>
      <div className="lyrics-container">
        <h6 className="lyrics">
          {this.props.lyrics}
        </h6>
      </div>
    </div>
  }
})

export default withRouter(Thanks);

import React from 'react';
import { withRouter } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';


const Thanks = React.createClass({
  goBack() {
    this.props.router.goBack();
  },

  render() {
    return <div className="content-container">
      <div className="thanks-container">
        <div className="back-container">
          <span
            className="back-btn"
            onTouchTap={this.goBack}
          >
            <img className="back-arrow" src={'./images/arrow.svg'} />
          </span>
        </div>
        <h1 className="main-header">
          Thanks for the request!
        </h1>
        <h2 className="second-header">
          While you wait, take a look at the lyrics for <br />
          <span className="lyrics-title">{this.props.requestedSong.songTitle}
          </span>
        </h2>
      </div>
      <div className="lyrics-container">
        <h6 className="lyrics">
          {this.props.lyrics}
        </h6>
        <div>
          <CircularProgress/>
          <h6>Loading lyrics...</h6>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Thanks);

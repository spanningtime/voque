import axios from 'axios';
import React from 'react';
import weakKey from 'weak-key';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Requests = React.createClass({

  getInitialState() {
    return {
      displayAnimation: 'none'
    }
  },

  removeRequest(request) {
    console.log(request)
    this.setState({ displayAnimation: 'requestFade 1s ease-in 1' })
    axios.delete(`/api/requests/${request.adminId}/${request.id}`)
    .then(() => {
      this.props.getRequests();
    })
    .catch((err) => {
      console.error(err);
    });
  },


  render() {
    const styleNoRequests = {
      display: this.props.noRequestsDisplay
    }

    const styleRequestAnimation = {
      animation: this.state.displayAnimation
    }

    return <div className="content-container">
      <h1 className="main-header title">Requests</h1>
      <h6
        id ="no-requests"
        style={styleNoRequests}
        >You have no requests.</h6>
      <div className="requests-container">
        <ol>
          {this.props.requests.map((request, index) => {
            if (request.songTitle.length > 21) {
              request.songTitle = request.songTitle.substring(0, 21) + '...';
            }

            return <li key={weakKey(request)}>
              <div className="song-request-container">
                {/* <ReactCSSTransitionGroup>

                </ReactCSSTransitionGroup> */}
                <i
                  className="material-icons"
                  id="delete"
                  onTouchTap={(() =>
                     this.removeRequest(request)).bind(this)}
                >
                  clear
                </i>
                <div className="container-for-border"
                     style={styleRequestAnimation}
                >
                  <div className="request-item-container">
                    <span>{this.props.singerName}</span>
                  </div>

                  <div className="request-item-container">
                    <span>{request.songTitle}</span>
                  </div>

                  <div className="request-item-container">
                    <span>by {request.artistName}</span>
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

export default Requests;

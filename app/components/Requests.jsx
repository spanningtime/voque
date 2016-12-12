import axios from 'axios';
import React from 'react';
import weakKey from 'weak-key';

const Requests = React.createClass({

  getInitialState() {
    return {
      slide: false,
      requestToDelete: null
    }
  },

  componentDidMount() {
    console.log('did mount');
  },

  removeRequest(request) {
    axios.delete(`/api/requests/${request.adminId}/${request.id}`)
    .then(() => {
      this.props.getRequests();
    })
    .catch((err) => {
      console.error(err);
    });
  },

  removeAnimation(request) {
    this.setState({ slide: true, requestToDelete: request }, this.removeRequest(request));
  },

  render() {
    const styleNoRequests = {
      display: this.props.noRequestsDisplay
    }

    const makeSlide = {
      animation: "slide 0.5s ease-in forwards",
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
                <i
                  className="material-icons"
                  id="delete"
                  onTouchTap={(() =>
                     this.removeAnimation(request)).bind(this)}>
                  clear
                </i>
                <div className={"container-for-border " + (this.state.slide ? "slide" : "")}
                      style={request === this.state.requestToDelete ? makeSlide : null}>
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

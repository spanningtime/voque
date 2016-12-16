import axios from 'axios';
import React from 'react';
import weakKey from 'weak-key';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Requests = React.createClass({

  getInitialState() {
    return {
      slide: false,
      requestToDelete: null
    }
  },

  removeRequest(request) {
    axios.delete(`/api/requests/${request.adminId}/${request.id}`)
    .then(() => {
      let updatedRequests = this.props.requests.filter((reqObj) => {
        return reqObj.id !== request.id
      })
      this.props.updateRequests(updatedRequests)
    })
    .catch((err) => {
      console.error(err);
    });
  },

  render() {
    const styleNoRequests = {
      display: this.props.noRequestsDisplay
    }

    return <div className="content-container">
      <h1 className="main-header title">Requests</h1>
      <h6
        id ="no-requests"
        style={styleNoRequests}
        >You have no requests.</h6>
      <div className="requests-container">
        <ol>
          <ReactCSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
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
                       this.removeRequest(request)).bind(this)}>
                    clear
                  </i>
                  <div className={"container-for-border"}>
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
          </ReactCSSTransitionGroup>
        </ol>
      </div>
    </div>;
  }
});

export default Requests;

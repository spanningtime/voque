import axios from 'axios';
import React from 'react';
import weakKey from 'weak-key';

const Requests = React.createClass({

  removeRequest(request) {
    axios.delete(`/api/requests/${request.adminId}/${request.id}`)
    .then(() => {
      this.props.getRequests();
    })
    .catch((err) => {
      console.error(err);
    });
  },

  render() {
    return <div className="content-container">
      <h1 className="main-header title">Requests</h1>
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
                  onTouchTap={(() =>
                     this.removeRequest(request)).bind(this)}
                >
                  clear
                </i>
                <div className="container-for-border">
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

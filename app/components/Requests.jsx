import React from 'react';
import weakKey from 'weak-key';
import axios from 'axios';

const Requests = React.createClass({

  removeRequest(request) {
    axios.delete(`/api/requests/${request.adminId}/${request.id}`)
    .then(() => {
      this.props.getRequests();
    })
    .catch((err) => {
      console.error(err)
    })
  },

  render() {

    return <div className="content-container">
      <h1 className="main-header title">Requests</h1>
      <div className="requests-container">
        <ol>
          {this.props.requests.map((request, index) => {
            console.log(request);
            if (request.songTitle.length > 21) {
              console.log(index);
              request.songTitle = request.songTitle.substring(0, 21) + '...';
            }
            return <li key={weakKey(request)}>
              <div className="song-request-container">

                <i className="material-icons"
                   onTouchTap={((event) =>
                     this.removeRequest(request)).bind(this)}
                >clear</i>

                <div className="container-for-border">
                <div className="request-item-container">
                  <span>William</span>
                </div>

                <div className="request-item-container">
                  <span>{request.songTitle}</span>
                </div>

                <div className="request-item-container">
                  <span>by {request.artistName}</span>
                </div>
                </div>
              </div>
            </li>
          })}
        </ol>
      </div>
    </div>
  }
})

export default Requests;

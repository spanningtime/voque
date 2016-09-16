import React from 'react';
import weakKey from 'weak-key';

const Requests = React.createClass({

  render() {

    return <div className="content-container">
      <h1 className="main-header requests-title">Requests</h1>
      <div className="requests-container">
        <ol>
          {this.props.requests.map((request, index) => {
            if (request.title.length > 21) {
              console.log(index);
              request.title = request.title.substring(0, 21) + '...';
            }
            return <li key={weakKey(request)}>
              <div className="song-request-container">

                <i className="material-icons"
                   onTouchTap={this.props.removeRequest}
                >clear</i>

                <div className="request-item-container">
                  <span>{request.singer}</span>
                </div>

                <div className="request-item-container">
                  <span>{request.title}</span>
                </div>

                <div className="request-item-container">
                  <span>by {request.artist}</span>
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

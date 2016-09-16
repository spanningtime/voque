import React from 'react';

const Requests = React.createClass({

  render() {

    return <div className="content-container">
      <h1 className="main-header requests-title">Requests</h1>
      <div className="requests-container">
        <ol>
          {this.props.requests.map((request) => {
            console.log(request.artist);
            return <li>
              <div className="song-request-container">

                <i className="material-icons">clear</i>

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

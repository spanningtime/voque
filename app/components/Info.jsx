import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Info = React.createClass({

  render() {

    return <div className="content-container">
      <h1 className="main-header">
        It's time to bring karaoke into the 21st Century
      </h1>
      <h2 className="second-header">
        Lorem ipsum lorem ipsum lorem ipsum
      </h2>
      <div className="columns-container">
      <div className="columns-items-container">
          <div className="column-item">
            <img className="money" src={'./images/folder.svg'} />
              <p>
                  Easily upload and manage your entire song list from your computer
              </p>
          </div>
          <div className="column-item">
            <img className="phone" src={'./images/phone.svg'} />
              <p>
                  Ditch the paper and let users access and request songs from their phones
              </p>
          </div>
          <div className="column-item">
            <img className="folder" src={'./images/money.svg'} />
            <p>
                Increase your earnings by offering convenient tipping options for singers on their phones
            </p>
          </div>
          </div>
          <div>
            <RaisedButton label="Register" />
          </div>
      </div>
    </div>
  }
})



export default Info;

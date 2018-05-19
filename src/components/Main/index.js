import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    const {
      albums,
      play,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <div className="album-list-box">
        {albums.items.map(item => (
          <li
            key={item.id}
            className="album-list"
          >
            <div>
              { item.images[0] &&
                <img
                  className="album-image"
                  src={item.images[0].url}
                  alt=""
                  onClick={(e) => {
                    play({
                      contextUri: item.uri,
                      accessToken,
                      refreshToken,
                    });
                  }}
                />
              }
            </div>
          </li>
        ))}
      </div>
    );
  }
}

Main.propTypes = {
  albums: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default Main;

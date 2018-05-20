import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../AlbumList';

class Main extends Component {
  render() {
    const {
      search: {
        albums,
      },
      play,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <div className="album-list-box">
        {albums ?
          albums.items.map(item => (
            <AlbumList 
              item={item}
              play={play}
              accessToken={accessToken}
              refreshToken={refreshToken}
            />
          )) : null
        }
      </div>
    );
  }
}

Main.propTypes = {
  search: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default Main;

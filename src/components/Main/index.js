import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../AlbumList';
import PlayList from '../PlayList';

class Main extends Component {
  render() {
    const {
      search: {
        albums,
        playlists,
      },
      play,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <React.Fragment>
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
        <div className="playlist-list-box">
        {playlists ?
          playlists.items.map(item => (
            <PlayList 
              item={item}
              play={play}
              accessToken={accessToken}
              refreshToken={refreshToken}
            />
          )) : null
        }
        </div>
      </React.Fragment>
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

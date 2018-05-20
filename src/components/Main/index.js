import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistList from '../ArtistList';
import AlbumList from '../AlbumList';
import PlayList from '../PlayList';

class Main extends Component {
  render() {
    const {
      search: {
        albums,
        playlists,
        artists,
      },
      spotifyActions: {
        play,
        fetchPlayList,
      },
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <div className="item-list-container">
        {artists &&
          <div className="item-list-title"><div>アーティスト</div></div>
        }
        <div className="item-list-box">
          {artists &&
          artists.items.map(item => (
            <ArtistList
              item={item}
              play={play}
              accessToken={accessToken}
              refreshToken={refreshToken}
            />
          ))
        }
        </div>
        {albums &&
          <div className="item-list-title"><div>アルバム</div></div>
        }
        <div className="item-list-box">
          {albums &&
            albums.items.map(item => (
              <AlbumList
                item={item}
                play={play}
                accessToken={accessToken}
                refreshToken={refreshToken}
              />
            ))
          }
        </div>
        {playlists &&
          <div className="item-list-title"><div>プレイリスト</div></div>
        }
        <div className="item-list-box">
          {playlists &&
          playlists.items.map(item => (
            <PlayList
              item={item}
              fetchPlayList={fetchPlayList}
              accessToken={accessToken}
              refreshToken={refreshToken}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default Main;

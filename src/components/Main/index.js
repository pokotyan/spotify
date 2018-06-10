import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArtistList from '../ArtistList';
import AlbumList from '../AlbumList';
import PlayList from '../PlayList';

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  div {
    font-size: 30px;
    color: white;
  }
`;

const Thumbnails = styled.div`
  display: grid;
  grid-auto-rows: 250px;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 10px 10px;
`;

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
      <Container>
        {artists &&
          <Title><div>アーティスト</div></Title>
        }
        <Thumbnails>
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
        </Thumbnails>
        {albums &&
          <Title><div>アルバム</div></Title>
        }
        <Thumbnails>
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
        </Thumbnails>
        {playlists &&
          <Title><div>プレイリスト</div></Title>
        }
        <Thumbnails>
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
        </Thumbnails>
      </Container>
    );
  }
}

Main.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default Main;

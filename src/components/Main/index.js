import React from 'react';
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

const Main = (props) => {
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
  } = props;

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
};

Main.propTypes = {
  search: PropTypes.shape({
    albums: PropTypes.object,
    playlists: PropTypes.object,
    artists: PropTypes.object,
  }).isRequired,
  spotifyActions: PropTypes.shape({
    play: PropTypes.func.isRequired,
    fetchPlayList: PropTypes.func.isRequired,
  }).isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default Main;

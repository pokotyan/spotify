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

const SearchResult = (props) => {
  const {
    searchResult,
    play,
    fetchPlayList,
    accessToken,
    refreshToken,
  } = props;

  return (
    <Container>
      {searchResult.artists && searchResult.artists.items.length &&
        <Title><div>アーティスト</div></Title>
      }
      <Thumbnails>
        {searchResult.artists && searchResult.artists.items.length &&
        searchResult.artists.items.map(item => (
          <ArtistList
            item={item}
            play={play}
            accessToken={accessToken}
            refreshToken={refreshToken}
          />
        ))
      }
      </Thumbnails>
      {searchResult.albums && searchResult.albums.items.length &&
        <Title><div>アルバム</div></Title>
      }
      <Thumbnails>
        {searchResult.albums && searchResult.albums.items.length &&
          searchResult.albums.items.map(item => (
            <AlbumList
              item={item}
              play={play}
              accessToken={accessToken}
              refreshToken={refreshToken}
            />
          ))
        }
      </Thumbnails>
      {searchResult.playlists && searchResult.playlists.items.length &&
        <Title><div>プレイリスト</div></Title>
      }
      <Thumbnails>
        {searchResult.playlists && searchResult.playlists.items.length &&
        searchResult.playlists.items.map(item => (
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

SearchResult.propTypes = {
  searchResult: PropTypes.shape({
    albums: PropTypes.object,
    playlists: PropTypes.object,
    artists: PropTypes.object,
  }).isRequired,
  play: PropTypes.func.isRequired,
  fetchPlayList: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SearchResult;
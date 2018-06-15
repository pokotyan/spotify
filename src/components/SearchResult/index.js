import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArtistList from '../ArtistList';
import AlbumList from '../AlbumList';
import PlayList from '../PlayList';

const Container = styled.div`
  width: 100%;
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

const ThumbnailsContainer = styled.div`
  width: 100%;
  padding: 28px;
`;

const Thumbnails = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const Links = styled.ul`
  width: 100%
  text-align: center;
  padding: 20px 0;

  li {
    display: inline-block;

    @media screen and (max-width: 500px) {
      display: block;
      width: 100%;
      padding-bottom: 1rem;  
    }

    a {
      color: gray;
      box-sizing: border-box;
      margin: .8em;
      padding: .8em .8em 0;
      letter-spacing: .16em;

      &:hover {
        color: white;
      }

      &.active {
        color: white;
      }
    }
  }

  .activeLink:after {
    content: "";
    height: 2px;
    background-color: #1db954;
    width: 30px;
    position: relative;
    top: 4px;
    display: block;
    margin: 0 auto;
  }
`;

class SearchResult extends Component {
  omitNoImageItem(items) {
    return items.filter(item => item.images.length);
  }

  isActive(path) {
    return this.props.url === path ? 'activeLink' : '';
  }

  render() {
    const {
      searchResult,
      play,
      fetchPlayList,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <Container>
        {(searchResult.artists || searchResult.albums || searchResult.playlists) &&
          <Links>
            <li className={this.isActive('/home/search/artist')}>
              <NavLink
                to="/home/search/artist"
              >アーティスト
              </NavLink>
            </li>
            <li className={this.isActive('/home/search/album')}>
              <NavLink
                to="/home/search/album"
              >
                アルバム
              </NavLink>
            </li>
            <li className={this.isActive('/home/search/playlist')}>
              <NavLink
                to="/home/search/playlist"
              >
                プレイリスト
              </NavLink>
            </li>
          </Links>
        }
        {searchResult.artists && searchResult.artists.items.length &&
          <Title><div>アーティスト</div></Title>
        }
        <ThumbnailsContainer>
          <Thumbnails>
            {searchResult.artists && searchResult.artists.items.length &&
            this.omitNoImageItem(searchResult.artists.items).map(item => (
              <ArtistList
                item={item}
                play={play}
                accessToken={accessToken}
                refreshToken={refreshToken}
              />
            ))
          }
          </Thumbnails>
        </ThumbnailsContainer>
        {searchResult.albums && searchResult.albums.items.length &&
          <Title><div>アルバム</div></Title>
        }
        <ThumbnailsContainer>
          <Thumbnails>
            {searchResult.albums && searchResult.albums.items.length &&
              this.omitNoImageItem(searchResult.albums.items).map(item => (
                <AlbumList
                  item={item}
                  play={play}
                  accessToken={accessToken}
                  refreshToken={refreshToken}
                />
              ))
            }
          </Thumbnails>
        </ThumbnailsContainer>
        {searchResult.playlists && searchResult.playlists.items.length &&
          <Title><div>プレイリスト</div></Title>
        }
        <ThumbnailsContainer>
          <Thumbnails>
            {searchResult.playlists && searchResult.playlists.items.length &&
            this.omitNoImageItem(searchResult.playlists.items).map(item => (
              <PlayList
                item={item}
                fetchPlayList={fetchPlayList}
                accessToken={accessToken}
                refreshToken={refreshToken}
              />
            ))
          }
          </Thumbnails>
        </ThumbnailsContainer>
      </Container>
    );
  }
}

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
  url: PropTypes.string.isRequired,
};

export default SearchResult;

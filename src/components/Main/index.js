/* eslint react/prefer-stateless-function: off */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../SearchBox';
import SearchResult from '../SearchResult';

class Main extends Component {
  render() {
    const {
      url,
      searchResult,
      search,
      play,
      fetchPlayList,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <React.Fragment>
        {url.includes('/home/search') ?
          <SearchBox
            search={search}
            accessToken={accessToken}
            refreshToken={refreshToken}
          />
          : null
        }
        {Object.keys(searchResult).length ?
          <SearchResult
            play={play}
            fetchPlayList={fetchPlayList}
            searchResult={searchResult}
            accessToken={accessToken}
            refreshToken={refreshToken}
            url={url}
          />
          : null
        }
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  url: PropTypes.string.isRequired,
  searchResult: PropTypes.shape({
    albums: PropTypes.object,
    playlists: PropTypes.object,
    artists: PropTypes.object,
  }).isRequired,
  search: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  fetchPlayList: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default Main;

/* eslint react/prefer-stateless-function: off */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Search from '../Search';
import ArtistDetail from '../ArtistDetail';

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
        <Route
          path="/home/search"
          render={() => (
            <Search
              url={url}
              searchResult={searchResult}
              search={search}
              play={play}
              fetchPlayList={fetchPlayList}
              accessToken={accessToken}
              refreshToken={refreshToken}
            />
          )}
        />
        <Route
          path="/home/search/result/artist/:artistId"
          render={() => (
            <ArtistDetail
              search={search}
              searchResult={searchResult}
              accessToken={accessToken}
              refreshToken={refreshToken}
            />
          )}
        />
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpotifySearchBox extends Component {
  render() {
    const {
      search,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <div>
        <span>アーティスト、曲、アルバム、プレイリスト検索</span>
        <input
          type="text"
          onChange={(e) => {
            search({
              accessToken,
              refreshToken,
              query: e.target.value,
              type: 'artist,track,album,playlist',
            });
          }}
        />
      </div>
    );
  }
}
SpotifySearchBox.propTypes = {
  search: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SpotifySearchBox;

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
            this.setState({ word: e.target.value });
          }}
        />
        <button onClick={() => {
          search({
            accessToken,
            refreshToken,
            query: this.state.word,
            type: 'artist,track,album,playlist',
          });
        }}
        >検索
        </button>
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

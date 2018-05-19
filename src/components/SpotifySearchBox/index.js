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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
SpotifySearchBox.propTypes = {
  search: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SpotifySearchBox;

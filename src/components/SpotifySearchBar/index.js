import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react'

class SpotifySearchBox extends Component {
  render() {
    const {
      search,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <div className="search-bar">
        <input
          className="search-bar-input"
          type="text"
          onChange={(e) => {
            this.setState({ word: e.target.value });
          }}
        />
        <Icon
          className="search-bar-icon"
          name="search"
          size="large"
          color="grey"
          onClick={() => {
            search({
              accessToken,
              refreshToken,
              query: this.state.word,
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

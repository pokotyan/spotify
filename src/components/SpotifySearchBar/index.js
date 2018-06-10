import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const SearchBar = styled.div`
  width: 100%;
  display: flex;
`;

const InputSearchText = styled.input`
  width: 70%;
  border: none;
  border-radius: 10px;
  outline: none;
`;

const SearchIcon = styled(Icon)`
  &:before {
    padding-left: 10px;
    cursor: pointer;
  }
`;

class SpotifySearchBox extends Component {
  render() {
    const {
      search,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <SearchBar>
        <InputSearchText
          type="text"
          onChange={(e) => {
            this.setState({ word: e.target.value });
          }}
        />
        <SearchIcon
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
      </SearchBar>
    );
  }
}
SpotifySearchBox.propTypes = {
  search: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SpotifySearchBox;

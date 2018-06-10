import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetDevice from '../SpotifyGetDevice';
import SearchBar from '../SpotifySearchBar';
import styled from 'styled-components';

const Lists = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: repeat(auto-fill, 23px);
  grid-template-columns: 90%;
  grid-row-gap: 20px;
`;

class SideBar extends Component {
  render() {
    const {
      spotifyActions: {
        fetchDevice,
        search,
      },
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <Lists>
        <SearchBar
          search={search}
          accessToken={accessToken}
          refreshToken={refreshToken}
        />
        <GetDevice
          fetchDevice={fetchDevice}
          accessToken={accessToken}
          refreshToken={refreshToken}
        />
      </Lists>
    );
  }
}

SideBar.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SideBar;

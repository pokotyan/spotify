import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetDevice from '../SpotifyGetDevice';
import SearchBar from '../SpotifySearchBar';

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
      <div className="sidebar-lists">
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
      </div>
    );
  }
}

SideBar.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SideBar;

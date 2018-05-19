import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetDevice from '../SpotifyGetDevice';
import SearchBox from '../SpotifySearchBox';

class SideBar extends Component {
  render() {
    const {
      fetchDevice,
      search,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <div className="sidebar-lists">
        <GetDevice
          fetchDevice={fetchDevice}
          accessToken={accessToken}
          refreshToken={refreshToken}
        />
        <SearchBox
          search={search}
          accessToken={accessToken}
          refreshToken={refreshToken}
        />
      </div>
    );
  }
}

SideBar.propTypes = {
  fetchDevice: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SideBar;

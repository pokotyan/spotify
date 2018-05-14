import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpotifyGetDevice extends Component {
  render() {
    const {
      fetchDevice,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <button onClick={() => fetchDevice({ accessToken, refreshToken })}>get Device</button>
    );
  }
}
SpotifyGetDevice.propTypes = {
  fetchDevice: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
};

export default SpotifyGetDevice;

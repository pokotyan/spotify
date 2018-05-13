import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpotifyGetDevice extends Component {
  render() {
    const {
      fetchDevice,
      accessToken,
    } = this.props;

    return (
      <div>
        <button onClick={() => fetchDevice(accessToken)}>get Device</button>
      </div>
    );
  }
}
SpotifyGetDevice.propTypes = {
  fetchDevice: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
};

export default SpotifyGetDevice;

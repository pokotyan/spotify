import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

class SpotifyGetDevice extends Component {
  render() {
    const {
      fetchDevice,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <Button
        inverted
        color='green'
        onClick={() => fetchDevice({ accessToken, refreshToken })}
      >
        device
      </Button>
    );
  }
}
SpotifyGetDevice.propTypes = {
  fetchDevice: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
};

export default SpotifyGetDevice;

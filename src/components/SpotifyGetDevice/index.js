import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const SpotifyGetDevice = (props) => {
  const {
    fetchDevice,
    accessToken,
    refreshToken,
  } = props;


  return (
    <Button
      inverted
      color="green"
      onClick={() => fetchDevice({ accessToken, refreshToken })}
    >
      device
    </Button>
  );
};

SpotifyGetDevice.propTypes = {
  fetchDevice: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SpotifyGetDevice;

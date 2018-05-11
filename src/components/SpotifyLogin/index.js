import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpotifyLogin extends Component {
  render() {
    const {
      auth,
    } = this.props;

    return (
      <a
        href="http://localhost:9000/api/spotify/auth"
      >
        spotify
      </a>
    );
  }
}
SpotifyLogin.propTypes = {
  auth: PropTypes.func.isRequired,
};

export default SpotifyLogin;

import React, { Component } from 'react';
import { Link } from 'react-router';
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
      // <button onClick={() => auth()}>spotify</button>
    );
  }
}
SpotifyLogin.propTypes = {
  auth: PropTypes.func.isRequired,
};

export default SpotifyLogin;

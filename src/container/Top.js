import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpotifyLogin from '../components/SpotifyLogin';
import * as spotifyActions from '../actions/spotify';

class Top extends Component {
  render() {
    const {
      spotifyActions: {
        auth,
      },
    } = this.props;

    return (
      <div>
        <h2>Top</h2>
        <SpotifyLogin
          auth={auth}
        />
      </div>
    );
  }
}
Top.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
};

function mapStateToProps({ rootReducer }) {
  return {
    spotify: rootReducer.spotify,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    spotifyActions: {
      ...bindActionCreators(spotifyActions, dispatch),
    },
  };
}
const TopContainer = connect(mapStateToProps, mapDispatchToProps)(Top);

export default TopContainer;

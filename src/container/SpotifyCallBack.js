import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as spotifyActions from '../actions/spotify';

class SpotifyCallBack extends Component {
  async componentDidMount() {
    const {
      spotifyActions: {
        fetchToken,
      },
      location: {
        query: {
          code,
        },
      },
    } = this.props;

    await fetchToken(code);

    browserHistory.push('/');
  }

  render() {
    return (
      <div />
    );
  }
}

SpotifyCallBack.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
  location: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    spotifyActions: {
      ...bindActionCreators(spotifyActions, dispatch),
    },
  };
}

const SpotifyCB = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotifyCallBack);

export default SpotifyCB;

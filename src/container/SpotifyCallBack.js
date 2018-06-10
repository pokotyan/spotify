import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import * as spotifyActions from '../actions/spotify';

class SpotifyCallBack extends Component {
  async componentDidMount() {
    const {
      spotifyActions: {
        fetchToken,
      },
      history,
      location: {
        search,
      },
    } = this.props;

    const result = qs.parse(search);
    await fetchToken(result['?code']);

    history.push('/home');
  }

  render() {
    return (
      <div />
    );
  }
}

SpotifyCallBack.propTypes = {
  spotifyActions: PropTypes.shape({
    fetchToken: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    spotify: state.spotify,
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

export default withRouter(SpotifyCB);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpotifyLogin from '../components/SpotifyLogin';
import * as spotifyActions from '../actions/spotify';

class Home extends Component {
  render() {
    const {
      spotifyActions: {
        auth,
      },
    } = this.props;

    return (
      <div>
        <h2>Home</h2>
        <p>Welcome to ようこそ</p>
        <SpotifyLogin
          auth={auth}
        />
      </div>
    );
  }
}
Home.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    about: state.about,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    spotifyActions: {
      ...bindActionCreators(spotifyActions, dispatch),
    },
  };
}
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;

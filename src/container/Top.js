import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpotifyLogin from '../components/SpotifyLogin';
import * as spotifyActions from '../actions/spotify';

const Top = () => (
  <div className="top">
    <SpotifyLogin />
  </div>
);

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
const TopContainer = connect(mapStateToProps, mapDispatchToProps)(Top);

export default TopContainer;

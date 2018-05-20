import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import * as spotifyActions from '../actions/spotify';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

const Home = (props) => {
  const {
    spotifyActions: {
      fetchDevice,
      search,
      play,
    },
    spotify,
  } = props;

  return (
    <div className="app">
      <div className="sidebar">
        {spotify.auth.accessToken ?
          <SideBar
            fetchDevice={fetchDevice}
            search={search}
            accessToken={spotify.auth.accessToken}
            refreshToken={spotify.auth.refreshToken}
          /> :
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        }
      </div>
      <div className="main">
        {Object.keys(spotify.search).length &&
          <Main
            search={spotify.search}
            play={play}
            accessToken={spotify.auth.accessToken}
            refreshToken={spotify.auth.refreshToken}
          />
        }
      </div>
      <div className="footer" />
    </div>
  );
};

Home.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
  spotify: PropTypes.object,
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
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;

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
      fetchPlayList,
    },
    spotify: {
      searchResult,
      auth,
    },
  } = props;

  return (
    <div className="container">
      <div className="sidebar">
        {auth.accessToken ?
          <SideBar
            fetchDevice={fetchDevice}
            search={search}
            accessToken={auth.accessToken}
            refreshToken={auth.refreshToken}
          /> :
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        }
      </div>
      <div className="main">
        {Object.keys(searchResult).length &&
          <Main
            play={play}
            fetchPlayList={fetchPlayList}
            searchResult={searchResult}
            accessToken={auth.accessToken}
            refreshToken={auth.refreshToken}
          />
        }
      </div>
      <div className="footer" />
    </div>
  );
};

Home.propTypes = {
  spotifyActions: PropTypes.shape({
    fetchDevice: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired,
    fetchPlayList: PropTypes.func.isRequired,
  }).isRequired,
  spotify: PropTypes.shape({
    searchResult: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
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
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;

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
    spotifyActions,
    spotify: {
      search,
      auth,
    },
  } = props;

  return (
    <div className="container">
      <div className="sidebar">
        {auth.accessToken ?
          <SideBar
            spotifyActions={spotifyActions}
            accessToken={auth.accessToken}
            refreshToken={auth.refreshToken}
          /> :
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        }
      </div>
      <div className="main">
        {Object.keys(search).length &&
          <Main
            search={search}
            spotifyActions={spotifyActions}
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
  spotifyActions: PropTypes.object.isRequired,
  spotify: PropTypes.shape({
    search: PropTypes.object.isRequired,
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

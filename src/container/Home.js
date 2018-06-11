import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import * as spotifyActions from '../actions/spotify';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

class Home extends Component {
  // ブラウザリロード => ssrした際はtokenが吹っ飛ぶので / にリダイレクトさせる。
  // (ログイン => callbackからHomeに来たときは非同期の遷移なのでここの処理は呼ばれない）
  static getRedirectUrl(state) {
    const {
      spotify: {
        auth: {
          accessToken,
          refreshToken,
        },
      },
    } = state;

    if (!accessToken && !refreshToken) {
      return '/';
    }

    return null;
  }

  render() {
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
      location: {
        pathname: url,
      },
    } = this.props;

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
          {auth.accessToken &&
            <Main
              url={url}
              search={search}
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
  }
}

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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as spotifyActions from '../actions/spotify';
import GetDevice from '../components/SpotifyGetDevice';
import SearchBox from '../components/SpotifySearchBox';

class Home extends Component {
  // componentWillUpdate(nextProps, nextState) {
  //   console.log(nextProps);
  //   console.log(nextState);
  //   const {
  //     spotifyActions: {
  //       fetchDevice,
  //     },
  //     spotify: {
  //       auth: {
  //         accessToken,
  //       },
  //     },
  //   } = nextProps;

  //   fetchDevice(accessToken);
  // }

  // async componentWillReceiveProps(nextProps) {
  //   const {
  //     spotifyActions: {
  //       fetchDevice,
  //     },
  //     spotify: {
  //       auth: {
  //         accessToken,
  //       },
  //     },
  //   } = nextProps;

  //   await fetchDevice(accessToken);
  // }

  // 本当はこのコンポーネントのマウント時に裏側でdevice取得したいけど、マウント直後はまだaccessTokenがpropsに入っていない。
  // propsにaccessToken入ってから更新系のライフサイクル使ってdevice取得したら無限ループになるし、どうしたらいいのか
  render() {
    const {
      spotifyActions: {
        fetchDevice,
        search,
        play,
      },
      // spotify: {
      //   auth: {
      //     accessToken,
      //   },
      // },
    } = this.props;

    return (
      <div>
        <h2>Home</h2>
        {this.props.spotify.auth.accessToken &&
          <div>
            <GetDevice
              fetchDevice={fetchDevice}
              accessToken={this.props.spotify.auth.accessToken}
              refreshToken={this.props.spotify.auth.refreshToken}
            />
            <SearchBox
              search={search}
              accessToken={this.props.spotify.auth.accessToken}
              refreshToken={this.props.spotify.auth.refreshToken}
            />
          </div>
        }
        {this.props.spotify.search && this.props.spotify.search.albums ?
          this.props.spotify.search.albums.items.map((item) => (
            <li
              key={item.id}
              style={{ 'listStyleType': 'none' }}
            >
              <div>
                { item.images[0] &&
                  <img
                    src={item.images[0].url}
                    alt=""
                    onClick={(e) => {
                      play({
                        contextUri: item.uri,
                        accessToken: this.props.spotify.auth.accessToken,
                        refreshToken: this.props.spotify.auth.refreshToken,
                      });
                    }}
                  />
                }
              </div>
            </li>
          )): <div></div>
        }
      </div>
    );
  }
}
Home.propTypes = {
  spotifyActions: PropTypes.object.isRequired,
  spotify: PropTypes.object,
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import moment from 'moment';

const Header = styled.div`
  width: 100vw;
  height: 60vh;
  margin-left: -15vw;
  padding-left: 15vw;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(transparent -30%,#181818);
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 72px;
      letter-spacing: -.005em;
      font-weight: 600;
      color: #fff;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -.005em;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    margin: 24px 0;
  }
`;

const TopTracks = styled.div`
  width: 100%;
  padding: 28px;
`;

const ItemList = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  margin-top: .69em;
`;

const IconContainer = styled.div`
  width: 5%;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const ItemInfo = styled.div`
  width: 85%;
`;

const SongName = styled.span`
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  letter-spacing: .015em;
`;

const SongDuration = styled.div`
  width: 10%;
  color: white;
`;

class ArtistDetail extends Component {
  componentDidMount() {
    const {
      fetchArtist,
      match: {
        params: {
          artistId,
        },
      },
      accessToken,
      refreshToken,
    } = this.props;

    fetchArtist({
      artistId,
      accessToken,
      refreshToken,
    });
  }

  msToMinutes(ms) {
    const minutes = moment.duration(ms).minutes();
    const seconds = moment.duration(ms).seconds();
    const paddedSeconds = String(seconds).padStart(2, "0");

    return `${minutes}:${paddedSeconds}`;
  }

  render() {
    const {
      artistInfo,
      searchResult: {
        artists: {
          items,
        },
      },
      match: {
        params: {
          artistId,
        },
      },
    } = this.props;
    const [artist] = items.filter(item => item.id === artistId);

    return (
      <React.Fragment>
        <Header image={artist.images[0].url}>
          <div><h1>{artist.name}</h1></div>
        </Header>
        {artistInfo.topTracks &&
          <React.Fragment>
            <Title><h1>人気曲</h1></Title>
            <TopTracks>
              {artistInfo.topTracks.tracks.map(track => (
                <ItemList
                  key={track.id}
                >
                  <IconContainer>
                    <Icon name="music" size="large" inverted color="grey" />
                  </IconContainer>
                  <ItemInfo>
                    <SongName>{track.name}</SongName>
                  </ItemInfo>
                  <SongDuration>{this.msToMinutes(track.duration_ms)}</SongDuration>
                </ItemList>
              ))}
            </TopTracks>
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

ArtistDetail.propTypes = {
  artistInfo: PropTypes.shape({
    topTracks: PropTypes.object,
    relatedArtists: PropTypes.object,
  }),
  searchResult: PropTypes.shape({
    artists: PropTypes.object,
  }).isRequired,
  fetchArtist: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default withRouter(ArtistDetail);

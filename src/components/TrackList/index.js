import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import moment from 'moment';

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

const ArtistNames = styled.span`
  width: 100%;
  display: block;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: gray;
  letter-spacing: .015em;
`;

const SongDuration = styled.div`
  width: 10%;
  color: white;
`;

class TrackList extends Component {
  getArtistNames(artists) {
    return artists.map(artist => artist.name);
  }

  msToMinutes(ms) {
    const minutes = moment.duration(ms).minutes();
    const seconds = moment.duration(ms).seconds();
    const paddedSeconds = String(seconds).padStart(2, "0");

    return `${minutes}:${paddedSeconds}`;
  }

  render() {
    const {
      item,
      play,
      accessToken,
      refreshToken,
    } = this.props;

    return (
      <ItemList
        key={item.id}
      >
        <IconContainer>
          <Icon name="music" size="large" inverted color="grey" />
        </IconContainer>
        <ItemInfo>
          <SongName>{item.name}</SongName>
          <ArtistNames>{this.getArtistNames(item.artists)}</ArtistNames>
        </ItemInfo>
        <SongDuration>{this.msToMinutes(item.duration_ms)}</SongDuration>
      </ItemList>
    );
  }
}

TrackList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration_ms: PropTypes.number.isRequired,
    artists: PropTypes.array.isRequired,
  }).isRequired,
  play: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default TrackList;

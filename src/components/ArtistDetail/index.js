import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  width: 100vw;
  height: 60vh;
  margin-left: -15vw;
  padding-left: 15vw;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
  position: relative;
  text-align: center;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(transparent -30%,#181818);
  }

  h1 {
    line-height: 60vh;
    font-size: 72px;
    letter-spacing: -.005em;
    font-weight: 600;
    color: #fff;
  }
`;

const ArtistDetail = (props) => {
  const {
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
  } = props;
  const [artist] = items.filter(item => item.id === artistId);

  return (
    <React.Fragment>
      <Header image={artist.images[0].url}>
        <h1>{artist.name}</h1>
      </Header>
    </React.Fragment>
  );
};

ArtistDetail.propTypes = {
  searchResult: PropTypes.shape({
    artists: PropTypes.object,
  }).isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default withRouter(ArtistDetail);

import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetail = (props) => {
  const {
    searchResult: {
      artists,
    },
    match: {
      params: {
        artistId,
      },
    },
  } = props;

  return (
    <div />
  );
};

ArtistDetail.propTypes = {
  searchResult: PropTypes.shape({
    artists: PropTypes.object,
  }).isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};

export default ArtistDetail;

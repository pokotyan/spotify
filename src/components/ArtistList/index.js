import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemList = styled.div`
  list-style-type: none;
`;

const ItemImage = styled.img`
  width: 177px;
  height: 177px;
  border-radius: 50%;
`;

const ArtistList = (props) => {
  const {
    item,
    play,
    accessToken,
    refreshToken,
  } = props;

  return (
    <ItemList
      key={item.id}
    >
      <div>
        { item.images[0] &&
          <ItemImage
            src={item.images[0].url}
            alt=""
            onClick={() => {
              play({
                contextUri: item.uri,
                accessToken,
                refreshToken,
              });
            }}
          />
        }
      </div>
    </ItemList>
  );
};

ArtistList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    uri: PropTypes.string.isRequired,
  }).isRequired,
  play: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default ArtistList;

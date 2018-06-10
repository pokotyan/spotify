import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemList = styled.div`
  list-style-type: none;
`;

const ItemImage = styled.img`
  width: 250px;
  height: 250px;
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
            onClick={(e) => {
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
  item: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default ArtistList;

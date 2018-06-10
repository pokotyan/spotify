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

const PlayList = (props) => {
  const {
    item,
    fetchPlayList,
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
              fetchPlayList({
                contextUri: item.tracks.href,
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

PlayList.propTypes = {
  item: PropTypes.object.isRequired,
  fetchPlayList: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default PlayList;

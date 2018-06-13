import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemList = styled.div`
  width: 16.666666667%; /* 100% / 6 */
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 2.5em;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px; /* 6つ並んでいる時のwidthを確認してその値をheightに入れた */
  border-radius: 50%;
  object-fit: contain; /* サイズがバラバラの画像の縦横比を保つ、かつ枠内に綺麗に納めたい場合に使える */
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

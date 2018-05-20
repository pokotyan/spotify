import React from 'react';
import PropTypes from 'prop-types';

const AlbumList = (props) => {
  const {
    item,
    play,
    accessToken,
    refreshToken,
  } = props;

  return (
    <li
      key={item.id}
      className="playlist-list"
    >
      <div>
        { item.images[0] &&
          <img
            className="playlist-image"
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
    </li>
  );
};

AlbumList.propTypes = {
  item: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default AlbumList;

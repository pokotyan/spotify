import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const ItemList = styled.div`
  width: 16.666666667%; /* 100% / 6 */
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 2.5em;

  @media screen and (max-width: 1300px) {
    width: 20%; /* 100% / 5 */

    @media screen and (max-width: 1000px) {
      width: 25%; /* 100% / 4 */

      @media screen and (max-width: 750px) {
        width: 33%; /* 100% / 3 */

        @media screen and (max-width: 600px) {
          width: 50%; /* 100% / 2 */
          
          @media screen and (max-width: 450px) {
            width: 100%; /* 100% / 2 */
          }
        }
      }
    }
  }
`;

const Item = styled.div`
  img {
    width: 100%;
    height: 200px; /* 6つ並んでいる時のwidthを確認してその値をheightに入れた */
    object-fit: cover;
  }

  div {
    margin: 12px 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;    
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: center;
    color: white;
  }
`;

const ArtistList = (props) => {
  const {
    item,
    accessToken,
    refreshToken,
    history,
  } = props;

  return (
    <ItemList
      key={item.id}
    >
      { item.images[0] &&
        <Item
          onClick={() => {
            history.push(`/home/artist/${item.id}`);
          }}
        >
          <img
            alt=""
            src={item.images[0].url}
          />
          <div>{item.name}</div>
        </Item>
      }
    </ItemList>
  );
};

ArtistList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }).isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default withRouter(ArtistList);

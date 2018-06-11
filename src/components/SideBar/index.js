import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import GetDevice from '../SpotifyGetDevice';

const Lists = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: repeat(auto-fill, 23px);
  grid-template-columns: 90%;
  grid-row-gap: 20px;
`;

const SideBar = (props) => {
  const {
    fetchDevice,
    accessToken,
    refreshToken,
  } = props;

  return (
    <Lists>
      <Link to="/home/search">
        <Icon
          className="search-bar-icon"
          name="search"
          size="large"
          color="grey"
        />
        検索
      </Link>
      <GetDevice
        fetchDevice={fetchDevice}
        accessToken={accessToken}
        refreshToken={refreshToken}
      />
    </Lists>
  );
};

SideBar.propTypes = {
  fetchDevice: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SideBar;

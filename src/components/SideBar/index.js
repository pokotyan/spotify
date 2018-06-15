import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
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

const ActiveLink = styled(NavLink)`
  &:link, &:visited {
    color: gray;
  }
  &:hover {
    color: white;
  }

  span {
    @media screen and (max-width: 750px) {
      display: none;
    }
  }
`;

const SideBar = (props) => {
  const {
    fetchDevice,
    accessToken,
    refreshToken,
  } = props;

  return (
    <Lists>
      <ActiveLink
        to="/home/search"
        activeStyle={{
          fontWeight: 'bold',
          color: 'green',
        }}
      >
        <Icon
          className="search-bar-icon"
          name="search"
          size="large"
          color="grey"
        />
        <span>検索</span>
      </ActiveLink>
      {/* <GetDevice
        fetchDevice={fetchDevice}
        accessToken={accessToken}
        refreshToken={refreshToken}
      /> */}
    </Lists>
  );
};

SideBar.propTypes = {
  fetchDevice: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SideBar;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GetDevice from '../SpotifyGetDevice';
import SearchBar from '../SpotifySearchBar';

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
    search,
    accessToken,
    refreshToken,
  } = props;


  return (
    <Lists>
      <SearchBar
        search={search}
        accessToken={accessToken}
        refreshToken={refreshToken}
      />
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
  search: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default SideBar;

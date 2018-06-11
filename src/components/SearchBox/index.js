import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBox = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: gray;
`;

const Discription = styled.h4`
  height: 30%;
  color: #fff;
`;

const Input = styled.div`
  height: 70%;
  input {
    font-size: 48px;
    line-height: 56px;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    caret-color: #1db954;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: 0;
  }
`;

const Search = (props) => {
  const {
    search,
    accessToken,
    refreshToken,
  } = props;

  return (
    <SearchBox>
      <Discription>
        アーティスト、ソング、アルバムまたはプレイリストで検索
      </Discription>
      <Input>
        <input
          type="text"
          onChange={(e) => {
            search({
              accessToken,
              refreshToken,
              query: e.target.value,
              type: 'artist,track,album,playlist',
            });
          }}
        />
      </Input>
    </SearchBox>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default Search;

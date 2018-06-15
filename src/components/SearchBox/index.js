import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const SearchBox = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: gray;
`;

const Discription = styled.div`
  height: 30%;

  h4 {
    color: #fff;
  }

  @media screen and (max-width: 450px) {
    text-align: center;
  }
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

    @media screen and (max-width: 450px) {
      font-size: 36px;
    }
  }
`;

class Search extends Component {
  handlePress(e) {
    const {
      search,
      accessToken,
      refreshToken,
      history,
    } = this.props;

    if (e.key === 'Enter') {
      search({
        accessToken,
        refreshToken,
        query: this.state.query,
        type: 'artist,track,album,playlist',
      });

      history.push('/home/search/result');
    }
  }

  render() {
    return (
      <SearchBox>
        <Discription>
          <h4>アーティスト、ソング、アルバムまたはプレイリストで検索</h4>
        </Discription>
        <Input>
          <input
            type="text"
            placeholder="入力してください...."
            onChange={(e) => {
              this.setState({ query: e.target.value });
            }}
            onKeyPress={::this.handlePress}
          />
        </Input>
      </SearchBox>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  refreshToken: PropTypes.string.isRequired,
};

export default withRouter(Search);

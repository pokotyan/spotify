import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GetPokemon extends Component {
  render() {
    const {
      get,
      pokemon,
    } = this.props;

    return (
      <div>
        <button onClick={() => get()}>get</button>
        <div>{pokemon.gif && pokemon.name}</div>
        <img
          src={pokemon.gif}
          alt=""
        />
      </div>
    );
  }
}
GetPokemon.propTypes = {
  get: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired,
};

export default GetPokemon;

import React from 'react';
import PropTypes from 'prop-types';

const GetPokemon = (props) => {
  const {
    get,
    pokemon,
  } = props;


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
};

GetPokemon.propTypes = {
  get: PropTypes.func.isRequired,
  pokemon: PropTypes.shape({
    gif: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default GetPokemon;

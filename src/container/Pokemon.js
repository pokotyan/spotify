import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetPokemon from '../components/GetPokemon';
import QuizPokemon from '../components/QuizPokemon';
import * as pokemonActions from '../actions/pokemon';

const Pokemon = (props) => {
  const {
    pokemonActions: {
      get,
      correct,
      unCorrect,
    },
    pokemon,
  } = props;


  return (
    <div>
      <h2>Pokemon</h2>
      <p>getだぜ</p>
      <GetPokemon
        get={get}
        pokemon={pokemon}
      />
      <QuizPokemon
        correct={correct}
        unCorrect={unCorrect}
        pokemon={pokemon}
      />
    </div>
  );
};

Pokemon.propTypes = {
  pokemonActions: PropTypes.shape({
    get: PropTypes.func.isRequired,
    correct: PropTypes.func.isRequired,
    unCorrect: PropTypes.func.isRequired,
  }).isRequired,
  pokemon: PropTypes.shape({
    gif: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pokemonActions: {
      ...bindActionCreators(pokemonActions, dispatch),
    },
  };
}

const PokemonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pokemon);

export default PokemonContainer;

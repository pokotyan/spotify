import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetPokemon from '../components/GetPokemon';
import QuizPokemon from '../components/QuizPokemon';
import * as pokemonActions from '../actions/pokemon';

class Pokemon extends Component {
  render() {
    const {
      pokemonActions: {
        get,
        correct,
        unCorrect,
      },
      pokemon,
    } = this.props;

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
  }
}
Pokemon.propTypes = {
  pokemonActions: PropTypes.object.isRequired,
  pokemon: PropTypes.object,
};

function mapStateToProps({ rootReducer }) {
  return {
    pokemon: rootReducer.pokemon,
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

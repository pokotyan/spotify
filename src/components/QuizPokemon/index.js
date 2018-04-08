import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuizPokemon extends Component {
  // changeText(e, pokemon) {
  //   console.log(e.target.value);
  //   console.log(pokemon);
  // }

  render() {
    const {
      correct,
      unCorrect,
      pokemon,
    } = this.props;

    return (
      <div>
        このポケモンの名前は？
        <input
          type="text"
          onChange={(e) => { e.target.value === pokemon.jaName ? correct() : unCorrect(); }}
        />
        {
          pokemon.correct ?
          <div>正解</div> :
          <div>不正解</div>
        }
      </div>
    );
  }
}
QuizPokemon.propTypes = {
  unCorrect: PropTypes.func.isRequired,
  correct: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired
};

export default QuizPokemon;
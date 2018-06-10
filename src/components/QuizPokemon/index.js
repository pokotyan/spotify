import React from 'react';
import PropTypes from 'prop-types';

const QuizPokemon = (props) => {
  const {
    correct,
    unCorrect,
    pokemon,
  } = props;

  return (
    <div>
      このポケモンの名前は？
      <input
        type="text"
        onChange={(e) => {
          if (e.target.value === pokemon.jaName) {
            correct();
          } else {
            unCorrect();
          }
        }}
      />
      {
        pokemon.correct ?
          <div>正解</div> :
          <div>不正解</div>
      }
    </div>
  );
};

QuizPokemon.propTypes = {
  unCorrect: PropTypes.func.isRequired,
  correct: PropTypes.func.isRequired,
  pokemon: PropTypes.shape({
    jaName: PropTypes.string,
    correct: PropTypes.func,
  }).isRequired,
};

export default QuizPokemon;

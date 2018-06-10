import React from 'react';
import PropTypes from 'prop-types';

const Increment = (props) => {
  const {
    increment,
    about: {
      value,
    },
  } = props;


  return (
    <div>
      <button onClick={() => increment()}>add</button>
      <div>{value}</div>
    </div>
  );
};

Increment.propTypes = {
  increment: PropTypes.func.isRequired,
  about: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default Increment;

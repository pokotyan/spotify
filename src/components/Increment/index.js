import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Increment extends Component {
  render() {
    const {
      increment,
      about: {
        value
      },
    } = this.props;

    return (
      <div>
        <button onClick={() => increment()}>add</button>
        <div>{value}</div>
      </div>
    );
  }
}
Increment.propTypes = {
  increment: PropTypes.func.isRequired,
  about: PropTypes.object.isRequired
};

export default Increment;

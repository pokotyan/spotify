import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Increment from '../components/Increment';
import * as aboutActions from '../actions/about';

const About = (props) => {
  const {
    aboutActions: {
      increment,
    },
    about,
  } = props;

  return (
    <div>
      <h2>About</h2>
      <p>aboutページです</p>
      <Increment
        increment={increment}
        about={about}
      />
    </div>
  );
};

About.propTypes = {
  aboutActions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
  }).isRequired,
  about: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    about: state.about,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    aboutActions: {
      ...bindActionCreators(aboutActions, dispatch),
    },
  };
}

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);

export default AboutContainer;

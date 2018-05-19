import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Increment from '../components/Increment';
import * as aboutActions from '../actions/about';

class About extends Component {
  render() {
    const {
      aboutActions: {
        increment,
      },
      about,
    } = this.props;

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
  }
}

About.propTypes = {
  aboutActions: PropTypes.object.isRequired,
  about: PropTypes.object,
};

function mapStateToProps({ rootReducer }) {
  return {
    about: rootReducer.about,
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

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import ProfileComponent from '../components/profile.js';
import { push } from 'react-router-redux';

console.log('Signup page loaded!');

const mapDispatchToProps = (dispatch) => {
  return {
    redirectToLogin: () => {
      dispatch(push('/login'));
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    auth: state.auth
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
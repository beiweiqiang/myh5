import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { saveUserMes } from '../actions';
import Auth from '../modules/Auth';

class Logout extends Component {
  componentDidMount() {
    Auth.deauthenticateUser();
    this.props.saveUserMes();
  }

  render() {
    // const {} = this.props;
    return (<Redirect to="/" />);
  }
}

Logout.propTypes = {
  saveUserMes: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    saveUserMes,
  }
)(Logout);

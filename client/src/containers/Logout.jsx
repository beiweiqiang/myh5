import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  saveUserMes,
  setPublishBtn,
} from '../actions';
import Auth from '../modules/Auth';

class Logout extends Component {
  componentDidMount() {
    Auth.deauthenticateUser();
    this.props.setPublishBtn(true);
    this.props.saveUserMes();
  }

  render() {
    // const {} = this.props;
    return (<Redirect to="/" />);
  }
}

Logout.propTypes = {
  saveUserMes: PropTypes.func.isRequired,
  setPublishBtn: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    saveUserMes,
    setPublishBtn,
  }
)(Logout);

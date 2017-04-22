import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CircularProgressBg from '../components/CircularProgressBg.jsx';
import LoginForm from '../components/Login/LoginForm.jsx';
import TopBar from './TopBarContainer.jsx';


import { signupSuccess, loginFormInput, submitLogin } from '../actions';

class LoginPage extends React.Component {

  componentWillMount() {
    // **取消注册成功状态
    this.props.signupSuccess(false);
  }

  render() {
    // dispatch to props
    const { loginFormInput, submitLogin } = this.props;

    // state to props
    const { loading, signupSuccessMes, validateRes, user, loginErrMessage, loginSuccess } = this.props;

    validateRes.errorMessage = loginErrMessage;

    if (loading) {
      return (
        <div>
          <TopBar />
          <CircularProgressBg />
        </div>
      );
    }

    if (loginSuccess) return (<Redirect to="/" />);

    return (
      <div>
        <TopBar />
        <LoginForm
          submitLogin={text => submitLogin(text)}
          loginFormInput={text => loginFormInput(text)}
          successMessage={signupSuccessMes}
          validateResult={validateRes}
          user={user}
        />
      </div>
    );
  }

}

LoginPage.propTypes = {
  signupSuccess: PropTypes.func.isRequired,
  loginFormInput: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,

  loading: PropTypes.bool.isRequired,
  signupSuccessMes: PropTypes.string.isRequired,
  loginSuccess: PropTypes.bool.isRequired,
  loginErrMessage: PropTypes.string.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  validateRes: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    signupSuccessMes: state.signup.successMes,
    loginErrMessage: state.login.errMes,
    loginSuccess: state.login.success,
    validateRes: state.login.validateMes,
    user: state.login.formInput,
  };
}


export default connect(
  mapStateToProps,
  {
    // 用于取消注册成功的状态
    signupSuccess,
    loginFormInput,
    submitLogin,
  },
  )(LoginPage);

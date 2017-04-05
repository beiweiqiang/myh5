import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import TopBar from '../components/TopBar.jsx';

import { submitSignup, signUpFormInput, signupSuccess } from '../actions';

class SignUpPage extends React.Component {

  render() {
    const { submitSignup, signUpFormInput, signupSuccess } = this.props;
    const { validateRes, checkSignup, user, signupErrMessage, loading } = this.props;
    // console.log(this.state);
    if (loading) {
      return (
        <div>
          <TopBar />
          <CircularProgressBg />
        </div>

      );
    }
    if (checkSignup) {
      signupSuccess(false);
      return (<Redirect to="/login" />);
    }

    return (
      <div>
        <TopBar />
        <SignUpForm
          onSubmit={content => submitSignup(content)}
          submitForm={this.submitForm}
          signupFormInput={input => signUpFormInput(input)}
          flash={signupErrMessage}
          validateResult={validateRes}
          user={user}
        />
      </div>
    );
  }

}

SignUpPage.PropTypes = {
  validateRes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirm: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
  }).isRequired,
  submitSignup: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    validateRes: state.validateSignUp,
    user: state.signUpFormInput,
    checkSignup: state.signupSuccess,
    signupErrMessage: state.signupErrMessage,
  };
}


export default connect(
  mapStateToProps,
  {
    submitSignup,
    signUpFormInput,
    signupSuccess,
  },
  )(SignUpPage);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar.jsx';



class TopBarContainer extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <TopBar user={user} />
      </div>
    );
  }
}

TopBarContainer.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};




function mapStateToProps(state) {
  return {
    // loading: state.loading,
    // validateRes: state.validateSignUp,
    user: state.saveUserMes,
    // checkSignup: state.signupSuccess,
    // signupErrMessage: state.signupErrMessage,
  };
}

// export default TopBarContainer;

export default connect(
  mapStateToProps,
  )(TopBarContainer);

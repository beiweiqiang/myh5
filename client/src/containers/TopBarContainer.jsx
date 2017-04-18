import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar.jsx';

import { getUserMes } from '../actions';

class TopBarContainer extends Component {
  componentWillMount() {
    if (!this.props.sendRequest) {
      this.props.getUserMes();
    }
  }

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
  getUserMes: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  sendRequest: PropTypes.bool.isRequired,
};




function mapStateToProps(state) {
  return {
    user: state.user,
    sendRequest: state.sendRequest,
  };
}

export default connect(
  mapStateToProps,
  {
    getUserMes,
  }
  )(TopBarContainer);

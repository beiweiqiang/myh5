import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar.jsx';

import { getUserMes } from '../actions';

class TopBarContainer extends Component {
  componentWillMount() {
    if (!this.props.requestFinish) {
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
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  requestFinish: PropTypes.bool.isRequired,
};




function mapStateToProps(state) {
  return {
    user: state.saveUserMes,
    requestFinish: state.requestFinish,
  };
}

export default connect(
  mapStateToProps,
  {
    getUserMes,
  }
  )(TopBarContainer);

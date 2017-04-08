import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TopBar from './TopBarContainer.jsx';
import Toolbar from '../components/Toolbar.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';

class NewPage extends Component {
  render() {
    const { loading } = this.props;
    if (loading) return (<CircularProgressBg />);
    return (
      <div>
        <TopBar />
        <Toolbar />
      </div>
    );
  }
}

NewPage.propTypes = {
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

export default connect(
  mapStateToProps,
)(NewPage);

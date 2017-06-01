import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Dashboard from '../components/Home/Dashboard.jsx';
import HomePage from '../components/Home/HomePage.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import TopBar from './TopBarContainer.jsx';

class DashboardPage extends React.Component {

  render() {
    const { loading } = this.props;
    if (loading) return (<CircularProgressBg />);
    return (
      <div>
        <TopBar />
        <HomePage />
      </div>
    );
  }

}

DashboardPage.propTypes = {

  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

export default connect(
  mapStateToProps,
  )(DashboardPage);

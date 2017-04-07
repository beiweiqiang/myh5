import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard.jsx';
import HomePage from '../components/HomePage.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import TopBar from './TopBarContainer.jsx';

class DashboardPage extends React.Component {

  render() {
    // if (this.state.loading) return (<CircularProgressBg color="#fff" />);
    // 存在token登录Dashboard 没有token登录HomePage
    /*if (this.state.secretData) return (
      <div>
        <TopBar />
        <Dashboard secretData={this.state.secretData} />
      </div>
    );*/
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
    user: state.saveUserMes,
    loading: state.loading,
  };
}

export default connect(
  mapStateToProps,
  )(DashboardPage);

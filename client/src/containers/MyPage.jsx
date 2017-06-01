import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import TopBar from './TopBarContainer.jsx';
import MyPageCard from '../components/MyPage/MyPageCard/index.jsx';

import {} from '../actions';

const cardContainerStyle = {
  margin: '0 10%',
  // width: '600px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
  // display: 'flex',
};

class MyPage extends Component {
  render() {
    // state to props
    const {
      myPage,
    } = this.props;
    // dispatch
    const {
      
    } = this.props;
    return (
      <div>
        <TopBar />
        <div style={cardContainerStyle}>
          {myPage.map((ele, index) => (
            <MyPageCard
              key={`${Date.now() + index}`}
              page={ele}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

MyPage.propTypes = {

};

function mapStateToProps(state) {
  return {
    myPage: state.myPage,
  };
}

export default connect(
  mapStateToProps,
  {

  }
)(MyPage);

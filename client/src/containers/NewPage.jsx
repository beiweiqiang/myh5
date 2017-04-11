import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TopBar from './TopBarContainer.jsx';
import Toolbar from '../components/Toolbar.jsx';
import MobileWindow from '../components/MobileWindow.jsx';
import PageList from '../components/PageList/PageList.jsx';
import MyTemplate from '../components/MyTemplate.jsx';
import Tabs from '../components/Tabs.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';

import { togglePhoneSize, addText, addPic, togglePage, deletePage } from '../actions';

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const centerStyle = {
  flex: 1,
  margin: '20px 20px 0 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const rightStyle = {
  width: '20%',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

class NewPage extends Component {
  render() {
    // state to props
    const { loading, mobileSize } = this.props;

    // dispatch to props
    const { togglePhoneSize, addText, addPic, togglePage, deletePage } = this.props;

    if (loading) return (<CircularProgressBg />);
    return (
      <div>
        <TopBar />
        <div style={style}>
          <MyTemplate />
          <div style={centerStyle} >
            <Toolbar
              togglePhoneSize={togglePhoneSize}
              addText={addText}
              addPic={addPic}
              mobileSize={mobileSize}
            />
            <MobileWindow
              mobileSize={mobileSize}
            />
          </div>
          <div style={rightStyle}>
            <PageList
              togglePage={togglePage}
              deletePage={deletePage}
            />
            <Tabs />
          </div>
        </div>
      </div>
    );
  }
}

NewPage.propTypes = {
  togglePhoneSize: PropTypes.func.isRequired,
  addText: PropTypes.func.isRequired,
  addPic: PropTypes.func.isRequired,
  togglePage: PropTypes.func.isRequired,
  deletePage: PropTypes.func.isRequired,

  mobileSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    mobileSize: state.togglePhoneSize,
  };
}

export default connect(
  mapStateToProps,
  {
    togglePhoneSize,
    addText,
    addPic,
    togglePage,
    deletePage,
  }
)(NewPage);

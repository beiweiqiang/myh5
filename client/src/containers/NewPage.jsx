import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TopBar from './TopBarContainer.jsx';
import Toolbar from '../components/Toolbar.jsx';
import MobileWindow from '../components/MobileWindow.jsx';
import PageList from '../components/PageList/PageList.jsx';
import MyTemplate from '../components/MyTemplate.jsx';
import EditTabs from '../components/EditTabs/Tabs.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import EditCard from '../components/EditCard/index.jsx';

// import Example from '../components/Draggable';

import {
  // toolbar
  togglePhoneSize, addText, addPic,
  // pagelist
  togglePage, deletePage, addNewPage, upMovePage, downMovePage,
  // edittabs
  changeFontSize, changeFontColor, fontBold, toggleNestedItem,
} from '../actions';

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

const underToolbarStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

class NewPage extends Component {
  render() {
    // state to props
    const { loading, mobileSize, currentPage, pages } = this.props;

    // dispatch to props
    const {
      togglePhoneSize, addText, addPic,
      togglePage, deletePage, addNewPage, upMovePage, downMovePage,
      changeFontSize, changeFontColor, fontBold, toggleNestedItem,
    } = this.props;

    if (loading) return (<CircularProgressBg />);

    return (
      <div>
        <TopBar />
        <div style={style}>
          <MyTemplate />
          <div style={centerStyle} >
            <Toolbar
              currentPage={currentPage}
              togglePhoneSize={togglePhoneSize}
              addText={addText}
              addPic={addPic}
              mobileSize={mobileSize}
            />
            <div style={underToolbarStyle}>
              <MobileWindow
                mobileSize={mobileSize}
              />

              <EditCard
                pages={pages}
                currentPage={currentPage}
                toggleNestedItem={toggleNestedItem}
                changeFontSize={changeFontSize}
                changeFontColor={changeFontColor}
                fontBold={fontBold}
              />

            </div>

          </div>
          <div style={rightStyle}>
            <PageList
              pages={pages}
              togglePage={togglePage}
              deletePage={deletePage}
              addNewPage={addNewPage}
              upMovePage={upMovePage}
              downMovePage={downMovePage}
            />
            <EditTabs
              pages={pages}
              currentPage={currentPage}
              toggleNestedItem={toggleNestedItem}
              changeFontSize={changeFontSize}
              changeFontColor={changeFontColor}
              fontBold={fontBold}
            />
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
  upMovePage: PropTypes.func.isRequired,
  downMovePage: PropTypes.func.isRequired,

  changeFontSize: PropTypes.func.isRequired,
  changeFontColor: PropTypes.func.isRequired,
  fontBold: PropTypes.func.isRequired,
  toggleNestedItem: PropTypes.func.isRequired,

  mobileSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  // pages: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    mobileSize: state.newPage.mobileSize,
    currentPage: state.newPage.currentPage,
    pages: state.newPage.pages,
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
    addNewPage,
    upMovePage,
    downMovePage,

    changeFontSize,
    changeFontColor,
    fontBold,
    toggleNestedItem,
  }
)(NewPage);

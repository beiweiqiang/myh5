import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TopBar from './TopBarContainer.jsx';
import Toolbar from '../components/Toolbar.jsx';
import MobileWindow from '../components/MobileWindow/MobileWindow.jsx';
import PageList from '../components/PageList/PageList.jsx';
import MyTemplate from '../components/MyTemplate.jsx';
import EditTabs from '../components/EditTabs/EditTabs.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import EditCard from '../components/EditCard/index.jsx';

import {
  // toolbar
  togglePhoneSize, addText, addPic,
  // pagelist
  togglePage, deletePage, addNewPage, upMovePage, downMovePage,
  // edittabs
  changeFontSize, changeFontColor, fontBold, changeTextContent, changeTextPosition,
  // tabs
  toggleTextEditCard, deleteTextItem,
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
    const { loading, mobileSize, currentPage, pages, currentTextIndex } = this.props;

    // dispatch to props
    const {
      // toolbar
      togglePhoneSize, addText, addPic,
      // pagelist
      togglePage, deletePage, addNewPage, upMovePage, downMovePage,
      // edittabs
      changeFontSize, changeFontColor, fontBold, changeTextContent, changeTextPosition,
      // tabs
      toggleTextEditCard, deleteTextItem,
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
                pages={pages}
                currentPage={currentPage}
                currentTextIndex={currentTextIndex}
                changeTextPosition={changeTextPosition}
              />
              {currentTextIndex === null ?
                null :
                (<EditCard
                  pages={pages}
                  currentTextIndex={currentTextIndex}
                  currentPage={currentPage}
                  changeFontSize={changeFontSize}
                  changeFontColor={changeFontColor}
                  fontBold={fontBold}
                  changeTextContent={changeTextContent}
                  toggleTextEditCard={toggleTextEditCard}
                  changeTextPosition={changeTextPosition}
                />)}

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
              toggleTextEditCard={toggleTextEditCard}
              deleteTextItem={deleteTextItem}
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

  changeTextContent: PropTypes.func.isRequired,
  changeFontSize: PropTypes.func.isRequired,
  changeFontColor: PropTypes.func.isRequired,
  fontBold: PropTypes.func.isRequired,
  changeTextPosition: PropTypes.func.isRequired,

  toggleTextEditCard: PropTypes.func.isRequired,
  deleteTextItem: PropTypes.func.isRequired,

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
    currentTextIndex: state.newPage.currentTextIndex,
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

    changeTextPosition,
    changeTextContent,
    changeFontSize,
    changeFontColor,
    fontBold,

    toggleTextEditCard,
    deleteTextItem,
  }
)(NewPage);

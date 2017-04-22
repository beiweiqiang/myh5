import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TopBar from './TopBarContainer.jsx';
import Toolbar from '../components/NewPage/ToolBar/Toolbar.jsx';
import MobileWindow from '../components/NewPage/MobileWindow/MobileWindow.jsx';
import PageList from '../components/NewPage/PageList/PageList.jsx';
import MyTemplate from '../components/NewPage/MyTemplate/MyTemplate.jsx';
import EditTabs from '../components/NewPage/EditTabs/EditTabs.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import EditCard from '../components/NewPage/EditCard/index.jsx';
import PublishSettings from '../components/NewPage/PublishSettings/index.jsx';

import {
  // toolbar
  togglePhoneSize, addText, addPic, publishH5, displayQRcode, displayPublishSettings,
  // pagelist
  togglePage, deletePage, addNewPage, upMovePage, downMovePage,
  // edittabs
  changeFontSize, changeFontColor, fontBold, changeTextContent, changeTextPosition,
  // tabs
  toggleTextEditCard, deleteTextItem,
  // publishsettings
  changePublishTitle,
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
    const {
      publishBtnDisabled,
      qrcodeUrl,
      showQR,
      email,
      loading,
      mobileSize,
      currentPage,
      pages,
      currentTextIndex,
      displayPubSettings,
      title,
    } = this.props;

    // dispatch to props
    const {
      // toolbar
      togglePhoneSize, addText, addPic, publishH5, displayQRcode, displayPublishSettings,
      // pagelist
      togglePage, deletePage, addNewPage, upMovePage, downMovePage,
      // edittabs
      changeFontSize, changeFontColor, fontBold, changeTextContent, changeTextPosition,
      // tabs
      toggleTextEditCard, deleteTextItem,
      // publishsettings
      changePublishTitle,
    } = this.props;

    if (loading) return (<CircularProgressBg />);

    return (
      <div>
        <TopBar />
        <div style={style}>
          <MyTemplate />
          <div style={centerStyle} >
            <Toolbar
              email={email}
              pages={pages}
              currentPage={currentPage}
              togglePhoneSize={togglePhoneSize}
              addText={addText}
              addPic={addPic}
              mobileSize={mobileSize}
              publishH5={publishH5}
              publishTitle={title}
              displayQRcode={displayQRcode}
              showQR={showQR}
              qrcodeUrl={qrcodeUrl}
              publishBtnDisabled={publishBtnDisabled}
              displayPublishSettings={displayPublishSettings}
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
              {!displayPubSettings ?
                null :
                (<PublishSettings
                  displayPublishSettings={displayPublishSettings}
                  publishTitle={title}
                  changePublishTitle={changePublishTitle}
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
  title: PropTypes.string.isRequired,
  publishBtnDisabled: PropTypes.bool.isRequired,
  displayPubSettings: PropTypes.bool.isRequired,
  qrcodeUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  togglePhoneSize: PropTypes.func.isRequired,
  addText: PropTypes.func.isRequired,
  addPic: PropTypes.func.isRequired,
  publishH5: PropTypes.func.isRequired,
  showQR: PropTypes.bool.isRequired,
  displayQRcode: PropTypes.func.isRequired,
  displayPublishSettings: PropTypes.func.isRequired,

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

  changePublishTitle: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    title: state.newPage.title,
    displayPubSettings: state.newPage.displayPublishSettings,
    publishBtnDisabled: state.newPage.publishBtnDisabled,
    qrcodeUrl: state.newPage.qrcodeUrl,
    showQR: state.newPage.displayQRcode,
    email: state.user.email,
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
    displayQRcode,
    togglePhoneSize,
    addText,
    addPic,
    publishH5,
    displayPublishSettings,

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

    changePublishTitle,
  }
)(NewPage);

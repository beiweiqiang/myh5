import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TopBar from './TopBarContainer.jsx';
import Toolbar from '../components/NewPage/ToolBar/Toolbar.jsx';
import MobileWindow from '../components/NewPage/MobileWindow/MobileWindow.jsx';
import PageList from '../components/NewPage/PageList/PageList.jsx';
import MyTemplate from '../components/NewPage/MyTemplate/MyTemplate.jsx';
import EditTabs from '../components/NewPage/EditTabs/EditTabs.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import EditTextCard from '../components/NewPage/EditTextCard/index.jsx';
import EditPicCard from '../components/NewPage/EditPicCard/index.jsx';
import PublishSettings from '../components/NewPage/PublishSettings/index.jsx';
import MySnackbar from '../components/MySnackbar.jsx';


import {
  // toolbar
  togglePhoneSize, addText, publishH5, displayQRcode, displayPublishSettings,
  // pagelist
  togglePage, deletePage, addNewPage, upMovePage, downMovePage,
  // edittabs
  changeFontSize, changeFontColor, fontBold, changeTextContent, changeTextPosition, changeTextOpacity,
  // tabs
  toggleTextEditCard, deleteTextItem, togglePicEditCard, deletePicItem,
  // publishsettings
  changePublishTitle,
  // snackbar
  displaySnackbar,
  // picdialog
  togglePicDialog, uploadPic, addPic,
  changePicSize, changePicPosition, changePicOpacity, changePicAngle, changePicSizeToPosition,
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
      // 发布按钮是否可以点击
      publishBtnDisabled,
      // 二维码url
      qrcodeUrl,
      // 是否展示二维码dialog
      showQR,
      // 用户email
      email,
      // 加载状态
      loading,
      // 展示移动端的屏幕大小 1 iphone6 2 iphone6p 3 iphone5s
      mobileSize,
      // 现在正在编辑哪一页
      currentPage,
      // h5整体内容
      pages,
      // 在编辑该页的哪一个文本 / 图片，没有在编辑状态则为null
      currentTextIndex, currentPicIndex,
      // 是否展示发布设置card
      displayPubSettings,
      // 浏览器窗口底端是否弹出一个snackbar
      snackbarOpen, snackbarMes,
      // 发布设置里面的title
      title,
      // 是否展示图片选择dialog
      displayPicDialog,
      // 用户上传的图片集合
      myUploadPic,
    } = this.props;

    // dispatch
    const {
      // toolbar
      togglePhoneSize, addText, publishH5, displayQRcode, displayPublishSettings,
      // 关于页码
      togglePage, deletePage, addNewPage, upMovePage, downMovePage,
      // 修改文本样式
      changeFontSize, changeFontColor, fontBold, changeTextContent, changeTextPosition, changeTextOpacity,
      // tabs
      toggleTextEditCard, deleteTextItem, togglePicEditCard, deletePicItem,
      // publishsettings
      changePublishTitle,

      displaySnackbar,

      // picdialog
      // 切换显示图片选择dialog
      togglePicDialog,
      // 上传用户图片
      uploadPic,
      // 点击添加按钮添加图片
      addPic,
      // 修改图片样式
      changePicSize, changePicPosition, changePicOpacity, changePicAngle, changePicSizeToPosition,
    } = this.props;

    if (loading) return (<CircularProgressBg />);

    return (
      <div>
        <TopBar />
        <div style={style}>
          <div style={centerStyle} >
            <Toolbar
              email={email}
              pages={pages}
              currentPage={currentPage}
              togglePhoneSize={togglePhoneSize}
              addText={addText}
              mobileSize={mobileSize}
              publishH5={publishH5}
              publishTitle={title}
              displayQRcode={displayQRcode}
              showQR={showQR}
              qrcodeUrl={qrcodeUrl}
              publishBtnDisabled={publishBtnDisabled}
              displayPublishSettings={displayPublishSettings}
              displaySnackbar={displaySnackbar}
              displayPicDialog={displayPicDialog}
              togglePicDialog={togglePicDialog}
              uploadPic={uploadPic}
              myUploadPic={myUploadPic}
              addPic={addPic}
            />

            <div style={underToolbarStyle}>
              <MobileWindow
                mobileSize={mobileSize}
                pages={pages}
                currentPage={currentPage}
                changeTextPosition={changeTextPosition}
                changePicSize={changePicSize}
                changePicPosition={changePicPosition}
                changePicSizeToPosition={changePicSizeToPosition}
              />
              {currentTextIndex === null ?
                null :
                (<EditTextCard
                  pages={pages}
                  currentTextIndex={currentTextIndex}
                  currentPage={currentPage}
                  changeFontSize={changeFontSize}
                  changeFontColor={changeFontColor}
                  fontBold={fontBold}
                  changeTextContent={changeTextContent}
                  toggleTextEditCard={toggleTextEditCard}
                  changeTextPosition={changeTextPosition}
                  changeTextOpacity={changeTextOpacity}
                />)}
              {currentPicIndex === null ?
                null :
                (<EditPicCard
                  pages={pages}
                  currentPicIndex={currentPicIndex}
                  currentPage={currentPage}
                  togglePicEditCard={togglePicEditCard}
                  changePicOpacity={changePicOpacity}
                  changePicAngle={changePicAngle}
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
              togglePicEditCard={togglePicEditCard}
              deletePicItem={deletePicItem}
            />
          </div>
        </div>
        <MySnackbar
          snackbarOpen={snackbarOpen}
          snackbarMes={snackbarMes}
          displaySnackbar={displaySnackbar}
        />
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
  changeTextOpacity: PropTypes.func.isRequired,

  toggleTextEditCard: PropTypes.func.isRequired,
  deleteTextItem: PropTypes.func.isRequired,
  togglePicEditCard: PropTypes.func.isRequired,
  deletePicItem: PropTypes.func.isRequired,

  mobileSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  // pages: PropTypes.array.isRequired,

  changePublishTitle: PropTypes.func.isRequired,

  snackbarOpen: PropTypes.bool.isRequired,
  snackbarMes: PropTypes.string.isRequired,
  displaySnackbar: PropTypes.func.isRequired,

  // picdialog
  displayPicDialog: PropTypes.bool.isRequired,
  togglePicDialog: PropTypes.func.isRequired,
  uploadPic: PropTypes.func.isRequired,
  addPic: PropTypes.func.isRequired,
  changePicSize: PropTypes.func.isRequired,
  changePicPosition: PropTypes.func.isRequired,
  changePicOpacity: PropTypes.func.isRequired,
  changePicAngle: PropTypes.func.isRequired,
  changePicSizeToPosition: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    displayPicDialog: state.newPage.displayPicDialog,
    snackbarOpen: state.snackbar.open,
    snackbarMes: state.snackbar.mes,
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
    currentPicIndex: state.newPage.currentPicIndex,

    myUploadPic: state.myUploadPic,
  };
}

export default connect(
  mapStateToProps,
  {
    displayQRcode,
    togglePhoneSize,
    addText,
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
    changeTextOpacity,

    toggleTextEditCard,
    deleteTextItem,
    togglePicEditCard,
    deletePicItem,

    changePublishTitle,

    displaySnackbar,

    togglePicDialog,
    uploadPic,
    addPic,
    changePicSize,
    changePicPosition,
    changePicOpacity,
    changePicAngle,
    changePicSizeToPosition,
  }
)(NewPage);

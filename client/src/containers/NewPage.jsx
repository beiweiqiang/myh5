import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  changePublishTitle, changeWechatDesc, uploadWechatImgUrl,
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
    const {
      dispatch,
      // 以下是 state
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
      // 微信分享图标
      wechatImg,
      // 微信分享描述
      wechatDes,
      // 是否展示图片选择dialog
      displayPicDialog,
      // 用户上传的图片集合
      myUploadPic,
    } = this.props;

    // 以下每个组件都分为 state 和 actionCreators 两部分
    const stateToolbar = {
      email,
      pages,
      currentPage,
      mobileSize,
      publishTitle: title,
      showQR,
      qrcodeUrl,
      publishBtnDisabled,
      displayPicDialog,
      myUploadPic,
      wechatImg,
      wechatDes,
    };
    const actionCreatorsToolbar = bindActionCreators({
      togglePhoneSize,
      addText,
      publishH5,
      displayQRcode,
      displayPublishSettings,
      displaySnackbar,
      // 切换显示图片选择dialog
      togglePicDialog,
      // 上传用户图片
      uploadPic,
      // 点击添加按钮添加图片
      addPic,
    }, dispatch);

    const stateMobileWindow = {
      mobileSize,
      pages,
      currentPage,
    };
    const actionCreatorsMobileWindow = bindActionCreators({
      changeTextPosition,
      changePicSize,
      changePicPosition,
      changePicSizeToPosition,
    }, dispatch);

    const stateEditTextCard = {
      pages,
      currentTextIndex,
      currentPage,
    };
    const actionCreatorsEditTextCard = bindActionCreators({
      changeFontSize,
      changeFontColor,
      fontBold,
      changeTextContent,
      toggleTextEditCard,
      changeTextPosition,
      changeTextOpacity,
    }, dispatch);

    const stateEditPicCard = {
      pages,
      currentPicIndex,
      currentPage,
    };
    const actionCreatorsEditPicCard = bindActionCreators({
      togglePicEditCard,
      changePicOpacity,
      changePicAngle,
    }, dispatch);

    const statePublishSettings = {
      publishTitle: title,
      wechatImgUrl: wechatImg,
      wechatDes,
    };
    const actionCreatorsPublishSettings = bindActionCreators({
      displayPublishSettings,
      uploadWechatImgUrl,
      changePublishTitle,
      changeWechatDesc,
    }, dispatch);

    const statePageList = {
      pages,
    };
    const actionCreatorsPageList = bindActionCreators({
      togglePage,
      deletePage,
      addNewPage,
      upMovePage,
      downMovePage,
    }, dispatch);

    const stateEditTabs = {
      pages,
      currentPage,
    };
    const actionCreatorsEditTabs = bindActionCreators({
      toggleTextEditCard,
      deleteTextItem,
      togglePicEditCard,
      deletePicItem,
    }, dispatch);

    const stateMySnackbar = {
      snackbarOpen,
      snackbarMes,
    };
    const actionCreatorsMySnackbar = bindActionCreators({
      displaySnackbar,
    }, dispatch);

    if (loading) return (<CircularProgressBg />);

    return (
      <div>
        <TopBar />
        <div style={style}>
          <div style={centerStyle} >
            <Toolbar
              {...stateToolbar}
              {...actionCreatorsToolbar}
            />

            <div style={underToolbarStyle}>
              <MobileWindow
                {...stateMobileWindow}
                {...actionCreatorsMobileWindow}
              />
              {currentTextIndex === null ?
                null :
                (<EditTextCard
                  {...stateEditTextCard}
                  {...actionCreatorsEditTextCard}
                />)}
              {currentPicIndex === null ?
                null :
                (<EditPicCard
                  {...stateEditPicCard}
                  {...actionCreatorsEditPicCard}
                />)}
              {!displayPubSettings ?
                null :
                (<PublishSettings
                  {...statePublishSettings}
                  {...actionCreatorsPublishSettings}
                />)}
            </div>

          </div>
          <div style={rightStyle}>
            <PageList
              {...statePageList}
              {...actionCreatorsPageList}
            />
            <EditTabs
              {...stateEditTabs}
              {...actionCreatorsEditTabs}
            />
          </div>
        </div>
        <MySnackbar
          {...stateMySnackbar}
          {...actionCreatorsMySnackbar}
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

  mobileSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  wechatImg: PropTypes.string.isRequired,

  snackbarOpen: PropTypes.bool.isRequired,
  snackbarMes: PropTypes.string.isRequired,

  displayPicDialog: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    displayPicDialog: state.newPage.displayPicDialog,
    snackbarOpen: state.snackbar.open,
    snackbarMes: state.snackbar.mes,
    title: state.newPage.title,
    wechatImg: state.newPage.wechatSettings.imgUrl,
    wechatDes: state.newPage.wechatSettings.desc,

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
)(NewPage);

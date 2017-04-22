import React, { Component, PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import InsertPhoto from 'material-ui/svg-icons/editor/insert-photo';
import TextFields from 'material-ui/svg-icons/editor/text-fields';
import Publish from 'material-ui/svg-icons/editor/publish';
import Save from 'material-ui/svg-icons/content/save';
import Settings from 'material-ui/svg-icons/action/settings';
import IconButton from 'material-ui/IconButton';
import { pink500, cyan500 } from 'material-ui/styles/colors';

import Dialog from 'material-ui/Dialog';

class MyToolbar extends Component {

  render() {
    // dispatch
    const {
      togglePhoneSize,
      addText,
      addPic,
      publishH5,
      displayQRcode,
      displayPublishSettings,
    } = this.props;

    // state to props
    const {
      publishTitle,
      mobileSize,
      currentPage,
      pages,
      email,
      showQR,
      qrcodeUrl,
      publishBtnDisabled,
    } = this.props;
    const publishContent = { pages, email, title: publishTitle };
    return (
      <div style={{ width: '100%' }}>
        <Toolbar style={{ width: '100%', marginBottom: '10px' }}>
          <ToolbarGroup firstChild>
            <DropDownMenu
              onChange={(event, key, value) => {
                togglePhoneSize(value);
              }}
              value={mobileSize}
            >
              <MenuItem value={1} primaryText="iphone6" />
              <MenuItem value={2} primaryText="iphone6p" />
              <MenuItem value={3} primaryText="iphone5" />
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton
              tooltip="添加文本"
              touch
              onTouchTap={(event) => addText(currentPage)}
            >
              <TextFields
                color={pink500}
              />
            </IconButton>
            <IconButton
              tooltip="添加图片"
              touch
              onTouchTap={(event) => addPic()}
            >
              <InsertPhoto
                color={pink500}
              />
            </IconButton>
            <ToolbarSeparator />
            <IconButton
              tooltip="保存正在编辑的H5"
              touch
              onTouchTap={(event) => console.log('save')}
            >
              <Save
                color={cyan500}
              />
            </IconButton>
            <IconButton
              tooltip="设置发布信息"
              touch
              onTouchTap={(event) => displayPublishSettings(true)}
            >
              <Settings
                color={cyan500}
              />
            </IconButton>
            <IconButton
              tooltip="发布H5"
              touch
              onTouchTap={(event) => publishH5(publishContent)}
              disabled={publishBtnDisabled}
            >
              <Publish
                color={cyan500}
              />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
        <Dialog
          title="请扫描以下二维码"
          modal={false}
          open={showQR}
          contentStyle={{ width: '320px', textAlign: 'center' }}
          onRequestClose={() => displayQRcode(false)}
        >
          <img id="qrcode" alt="qrcode" src={qrcodeUrl} />
        </Dialog>
      </div>
    );
  }
}

MyToolbar.propTypes = {
  togglePhoneSize: PropTypes.func.isRequired,
  addText: PropTypes.func.isRequired,
  addPic: PropTypes.func.isRequired,
  publishH5: PropTypes.func.isRequired,
  displayQRcode: PropTypes.func.isRequired,
  displayPublishSettings: PropTypes.func.isRequired,
  publishTitle: PropTypes.string.isRequired,
  mobileSize: PropTypes.number.isRequired,
  publishBtnDisabled: PropTypes.bool.isRequired,
  qrcodeUrl: PropTypes.string.isRequired,
  showQR: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default MyToolbar;

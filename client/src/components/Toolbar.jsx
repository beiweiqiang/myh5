import React, { Component, PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import Dialog from 'material-ui/Dialog';

class MyToolbar extends Component {

  render() {
    const { togglePhoneSize, addText, addPic, publishH5, displayQRcode } = this.props;

    const { mobileSize, currentPage, pages, email, showQR, qrcodeUrl, publishBtnDisabled } = this.props;
    const publishContent = { pages, email };
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
            <RaisedButton
              onTouchTap={(event) => addText(currentPage)}
              label="文本"
              secondary
            />
            <RaisedButton
              onTouchTap={(event) => addPic()}
              label="图片"
              secondary
            />
            <RaisedButton
              disabled={publishBtnDisabled}
              onTouchTap={(event) => publishH5(publishContent)}
              label="发布"
              primary
            />
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

  mobileSize: PropTypes.number.isRequired,
};

export default MyToolbar;

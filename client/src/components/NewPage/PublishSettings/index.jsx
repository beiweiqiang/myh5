import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Done from 'material-ui/svg-icons/action/done';
import { blue500 } from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

import onClickOutside from 'react-onclickoutside';

import PublishTitle from './PublishTitle.jsx';
import WechatShareImgUrl from './WechatShareImgUrl.jsx';
import WechatShareDesc from './WechatShareDesc.jsx';

class PublishSettings extends Component {
  handleClickOutside = evt => {
    this.props.displayPublishSettings(false);
  }
  
  render() {
    // state
    const {
      publishTitle,
      wechatImgUrl,
      wechatDes,
    } = this.props;
    // dispatch
    const {
      displayPublishSettings,
      changePublishTitle,
      uploadWechatImgUrl,
      changeWechatDesc,
    } = this.props;
    return (
      <Card style={{ maxWidth: '360px', padding: '0 2em 1em 2em' }}>
        <CardHeader
          title="发布设置"
          style={{ paddingLeft: '0px', paddingRight: '0px', display: 'flex', alignItems: 'center' }}
          titleStyle={{ color: blue500, fontSize: '1.2em' }}
        >
          <FlatButton
            icon={<Done />}
            onTouchTap={(event) => displayPublishSettings(false)}
          />
        </CardHeader>
        <PublishTitle
          changePublishTitle={changePublishTitle}
          publishTitle={publishTitle}
        />
        <h4 style={{ color: blue500, fontWeight: 'normal' }}>微信分享设置</h4>
        <WechatShareImgUrl
          imgUrl={wechatImgUrl}
          upload={uploadWechatImgUrl}
        />
        <WechatShareDesc
          changeWechatShareDesc={changeWechatDesc}
          desc={wechatDes}
        />
      </Card>
    );
  }
}

PublishSettings.propTypes = {
  displayPublishSettings: PropTypes.func.isRequired,
};


export default onClickOutside(PublishSettings);

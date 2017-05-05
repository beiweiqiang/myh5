import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class WechatShareDesc extends Component {
  render() {
    // state
    const {
      desc,
    } = this.props;
    // dispatch
    const {
      changeWechatShareDesc,
    } = this.props;

    return (
      <TextField
        floatingLabelFixed
        floatingLabelText="分享描述(不填则为标题)"
        rows={1}
        style={{
          margin: '12px 0',
        }}
        rowsMax={1}
        value={desc}
        onChange={(event) => {
          changeWechatShareDesc(event.target.value);
        }}
      />
    );
  }
}

WechatShareDesc.propTypes = {

};

export default WechatShareDesc;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class WechatShareImgUrl extends Component {
  render() {
    // state
    const {
      imgUrl,
    } = this.props;
    // dispatch
    const {
      upload,
    } = this.props;
    return (
      <div
        style={{
          margin: '12px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <RaisedButton
          label="上传分享图标"
          labelPosition="before"
          primary
          style={styles.uploadButton}
          containerElement="label"
        >
          <input
            type="file"
            style={styles.uploadInput}
            onChange={(event) => {
              const file = event.target.files[0];
              upload(file);
            }}
          />
        </RaisedButton>
        <div>
          <img
            style={{
              marginTop: '12px',
              width: '120px',
              height: '120px',
              border: '0.2px solid #eee',
            }}
            src={imgUrl}
            alt="shareImg"
          />
        </div>
      </div>
    );
  }
}

WechatShareImgUrl.propTypes = {

};

export default WechatShareImgUrl;
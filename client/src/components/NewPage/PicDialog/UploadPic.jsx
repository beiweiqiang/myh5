import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery';

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

class UploadPic extends Component {
  render() {
    // dispatch
    const {
      uploadPic,

    } = this.props;
    // state to props
    const {

    } = this.props;
    return (
      <div>
        <FlatButton
          label="上传你的图片"
          labelPosition="before"
          primary
          style={styles.uploadButton}
          containerElement="label"
        >
          <input
            type="file"
            style={styles.uploadInput}
            multiple
            onChange={(event) => {
              const files = event.target.files;
              uploadPic(files);
            }}
          />
        </FlatButton>
        <div style={{ textAlign: 'center' }}>
          <small>
            (最多一次上传5张)
          </small>
        </div>
      </div>
    );
  }
}

UploadPic.propTypes = {

};

export default UploadPic;

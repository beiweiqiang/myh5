import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import PicTabs from './PicTabs.jsx';

class PicDialog extends Component {

  render() {
    // state to props
    const {
      displayPicDialog,
      myUploadPic,
      currentPage,
    } = this.props;
    // dispatch
    const {
      togglePicDialog,
      uploadPic,
      addPic,
    } = this.props;
    const actions = [
      <FlatButton
        label="取消"
        primary
        onTouchTap={(event) => togglePicDialog(false)}
      />,
    ];

    return (
      <Dialog
        contentStyle={{ marginTop: '-4em' }}
        style={{ marginTop: '-4em' }}
        title="图片选择"
        modal={false}
        open={displayPicDialog}
        onRequestClose={() => togglePicDialog(false)}
      >
        <PicTabs
          uploadPic={uploadPic}
          myUploadPic={myUploadPic}
          currentPage={currentPage}
          addPic={addPic}
          togglePicDialog={togglePicDialog}
        />
      </Dialog>
    );
  }
}

PicDialog.propTypes = {
  displayPicDialog: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,

  addPic: PropTypes.func.isRequired,
  togglePicDialog: PropTypes.func.isRequired,
  uploadPic: PropTypes.func.isRequired,
};

export default PicDialog;
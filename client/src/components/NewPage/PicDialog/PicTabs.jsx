import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

// import PicGridList from './PicGridList.jsx';
import MyUploadPic from './MyUploadPic.jsx';
import PicLibrary from './PicLibrary.jsx';

class PicTabs extends Component {
  render() {
    // dispatch
    const {
      uploadPic,
    } = this.props;
    // state to props
    const {
      myUploadPic,
    } = this.props;
    return (
      <Tabs>
        <Tab label="图片库" >
          <PicLibrary
          />
        </Tab>
        <Tab label="我的上传" >
          <MyUploadPic
            uploadPic={uploadPic}
            myUploadPic={myUploadPic}
          />
        </Tab>
      </Tabs>
    );
  }
}

PicTabs.propTypes = {
  uploadPic: PropTypes.func.isRequired,
};

export default PicTabs;

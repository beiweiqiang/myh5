import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { cyan400 } from 'material-ui/styles/colors';

import Rnd from 'react-rnd';

import MyDraggable from '../MyDraggable/index.jsx';
import MyRnd from '../MyRnd/index.jsx';


class MobileWindow extends Component {
  render() {
    const { mobileSize, pages, currentPage } = this.props;
    const {
      changeTextPosition,
      changePicSize,
      changePicPosition,
      changePicSizeToPosition,
    } = this.props;
    const windowSize = {};
    switch (mobileSize) {
      // i6 状态栏40px 导航栏88px
      case 1: windowSize.width = 375; windowSize.height = (667 - 40 - 88); break;
      // i6p 状态栏60px 导航栏132px
      case 2: windowSize.width = 414; windowSize.height = (736 - 40 - 88); break;
      // i5s 状态栏40px 导航栏88px
      case 3: windowSize.width = 320; windowSize.height = (568 - 40 - 88); break;
      default: break;
    }
    const style = {
      width: `${windowSize.width}px`,
      height: `${windowSize.height}px`,
      margin: '0 10px',
      display: 'inline-block',
      position: 'relative',
    };
    return (
      <div>
        <h4 style={{ textAlign: 'center', color: cyan400 }}>
          {`第 ${currentPage + 1} 页`}
        </h4>
        <Paper style={style} zDepth={1}>
          {pages[currentPage].text.length > 0 ?
          pages[currentPage].text.map((ele, index) => (
            <MyDraggable
              ele={ele}
              index={index}
              currentPage={currentPage}
              changeTextPosition={changeTextPosition}
              key={`${Date.now() + index}`}
            />
          )) :
          null}
          {pages[currentPage].pic.length > 0 ?
            pages[currentPage].pic.map((ele, index) => (
              <MyRnd
                ele={ele}
                index={index}
                currentPage={currentPage}
                changePicSize={changePicSize}
                changePicPosition={changePicPosition}
                changePicSizeToPosition={changePicSizeToPosition}
                key={`${Date.now() + index}`}
              />
            )) :
            null}
        </Paper>
      </div>
    );
  }
}

MobileWindow.propTypes = {
  mobileSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,

  changeTextPosition: PropTypes.func.isRequired,

  changePicSize: PropTypes.func.isRequired,
  changePicPosition: PropTypes.func.isRequired,
  changePicSizeToPosition: PropTypes.func.isRequired,
};

export default MobileWindow;

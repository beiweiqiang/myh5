import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { cyan400 } from 'material-ui/styles/colors';

import MyDraggable from '../MyDraggable/index.jsx';


class MobileWindow extends Component {
  render() {
    const { mobileSize, pages, currentPage, currentTextIndex } = this.props;
    const { changeTextPosition } = this.props;
    const windowSize = {};
    switch (mobileSize) {
      case 1: windowSize.width = 375; windowSize.height = 667; break;
      case 2: windowSize.width = 414; windowSize.height = 736; break;
      case 3: windowSize.width = 320; windowSize.height = 568; break;
      default: break;
    }
    const style = {
      width: `${windowSize.width}px`,
      height: `${windowSize.height}px`,
      margin: '10px 20px 20px 20px',
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
                currentTextIndex={currentTextIndex}
                changeTextPosition={changeTextPosition}
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
};

export default MobileWindow;

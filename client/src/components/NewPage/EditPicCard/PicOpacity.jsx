import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from 'material-ui/Slider';

class PicOpacity extends Component {
  render() {
    // state
    const {
      currentPage,
      opacity,
      currentPicIndex,
    } = this.props;
    // dispatch
    const {
      changePicOpacity,
    } = this.props;

    return (
      <div>
        <small>{`图片不透明度: ${opacity} (可使用键盘方向键)`}</small>
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={opacity}
          onChange={(event, newValue) => {
            changePicOpacity(currentPage, currentPicIndex, newValue);
          }}
          style={{
            marginBottom: '-24px',
          }}
        />
      </div>
    );
  }
}

PicOpacity.propTypes = {

};

export default PicOpacity;

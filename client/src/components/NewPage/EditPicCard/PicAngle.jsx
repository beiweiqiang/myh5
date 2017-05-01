import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';

class PicAngle extends Component {
  render() {
    // state
    const {
      currentPage,
      angle,
      currentPicIndex,
    } = this.props;
    // dispatch
    const {
      changePicAngle,
    } = this.props;

    return (
      <div>
        <small>{`图片角度: ${angle} (可使用键盘方向键)`}</small>
        <Slider
          min={-180}
          max={180}
          step={1}
          value={angle}
          onChange={(event, newValue) => {
            changePicAngle(currentPage, currentPicIndex, newValue);
          }}
          style={{
            marginBottom: '-24px',
          }}
        />
      </div>
    );
  }
}

PicAngle.propTypes = {

};

export default PicAngle;

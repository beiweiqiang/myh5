import React, { Component, PropTypes } from 'react';
import { SketchPicker } from 'react-color';


class ColorPic extends Component {
  render() {
    const { changeFontColor } = this.props;
    const { currentPage, currentTextIndex, color } = this.props;
    return (
      <div>
        <SketchPicker
          color={color}
          onChangeComplete={pickColor => changeFontColor(currentPage, currentTextIndex, pickColor.hex)}
        />
      </div>
    );
  }
}

ColorPic.propTypes = {

};

export default ColorPic;

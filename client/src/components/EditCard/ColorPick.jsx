import React, { Component, PropTypes } from 'react';
import { SketchPicker } from 'react-color';
import { grey500 } from 'material-ui/styles/colors';


class ColorPic extends Component {
  render() {
    const { changeFontColor } = this.props;
    const { currentPage, currentTextIndex, color } = this.props;
    return (
      <div>
        <small style={{ color: grey500 }}>选择字体颜色</small>
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

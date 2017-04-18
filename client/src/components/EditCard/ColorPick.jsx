import React, { Component, PropTypes } from 'react';
import { SketchPicker } from 'react-color';


class ColorPic extends Component {
  render() {
    const { changeFontColor } = this.props;
    const { currentPage, index, textStyle} = this.props;
    return (
      <div>
        <SketchPicker
          color={textStyle[index].color}
          onChangeComplete={color => changeFontColor(currentPage, index, color.hex)}
        />
      </div>
    );
  }
}

ColorPic.propTypes = {

};

export default ColorPic;
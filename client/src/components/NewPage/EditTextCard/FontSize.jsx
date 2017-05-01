import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';


class FontSize extends Component {
  render() {
    const { size } = this.props;
    const { changeFontSize, currentTextIndex, currentPage } = this.props;

    return (
      <div
        style={{
          marginTop: '12px',
        }}
      >
        <small>{`字体大小: ${size} (可使用键盘方向键)`}</small>
        <Slider
          min={13}
          max={100}
          step={1}
          value={size}
          onChange={(event, newValue) => {
            changeFontSize(currentPage, currentTextIndex, newValue);
          }}
          style={{
            marginBottom: '-24px',
          }}
        />
      </div>
    );
  }
}

FontSize.propTypes = {

};

export default FontSize;

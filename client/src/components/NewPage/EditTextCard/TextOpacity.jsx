import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';

class TextOpacity extends Component {
  render() {
    // state
    const {
      currentPage,
      opacity,
      currentTextIndex,
    } = this.props;
    // dispatch
    const {
      changeTextOpacity,
    } = this.props;

    return (
      <div>
        <small>{`文本不透明度: ${opacity} (可使用键盘方向键)`}</small>
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={opacity}
          onChange={(event, newValue) => {
            changeTextOpacity(currentPage, currentTextIndex, newValue);
          }}
          style={{
            marginBottom: '-48px',
          }}
        />
      </div>
    );
  }
}

TextOpacity.propTypes = {

};

export default TextOpacity;

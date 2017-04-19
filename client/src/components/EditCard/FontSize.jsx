import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';


class FontSize extends Component {
  render() {
    const { size } = this.props;
    const { changeFontSize, currentTextIndex, currentPage } = this.props;

    return (
      <TextField
        name="fontSize"
        floatingLabelText="输入字体大小"
        onChange={(event, newValue) => {
          changeFontSize(currentPage, currentTextIndex, newValue);
        }}
        value={size}
        type="number"
      />
    );
  }
}

FontSize.propTypes = {

};

export default FontSize;

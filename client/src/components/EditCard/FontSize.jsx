import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';


class FontSize extends Component {
  render() {
    const { textStyle } = this.props;
    const { changeFontSize, index, currentPage } = this.props;

    return (
      <div>
        <TextField
          name="fontSize"
          floatingLabelText="输入字体大小"
          onChange={(event, newValue) => {
            changeFontSize(currentPage, index, newValue);
          }}
          value={textStyle[index].size}
          type="number"
        />
      </div>
    );
  }
}

FontSize.propTypes = {

};

export default FontSize;

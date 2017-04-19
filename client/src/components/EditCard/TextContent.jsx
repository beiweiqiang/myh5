import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class TextContent extends Component {
  render() {
    const { currentTextIndex, currentPage, content } = this.props;
    const { changeTextContent } = this.props;
    return (
      <TextField
        floatingLabelFixed
        floatingLabelText="输入文本内容"
        multiLine
        autoFocus
        rows={1}
        rowsMax={3}
        value={content}
        onChange={(event) => {
          changeTextContent(currentPage, currentTextIndex, event.target.value);
        }}
      />
    );
  }
}

TextContent.propTypes = {

};

export default TextContent;

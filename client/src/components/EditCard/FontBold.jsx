import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

class FontBold extends Component {
  render() {
    const { fontBold } = this.props;
    const { currentPage, index, textStyle } = this.props;
    return (
      <div>
        <Checkbox
          style={{ margin: '6px 0px' }}
          label="加粗"
          onCheck={(event, isInputChecked) => {
            fontBold(currentPage, index, isInputChecked);
          }}
          checked={textStyle[index].bold}
        />
      </div>
    );
  }
}

FontBold.propTypes = {

};

export default FontBold;
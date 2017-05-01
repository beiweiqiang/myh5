import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

class FontBold extends Component {
  render() {
    const { fontBold } = this.props;
    const { currentPage, currentTextIndex, bold } = this.props;
    return (
      <div>
        <Checkbox
          style={{ margin: '18px 0px' }}
          label="加粗"
          onCheck={(event, isInputChecked) => {
            fontBold(currentPage, currentTextIndex, isInputChecked);
          }}
          checked={bold}
        />
      </div>
    );
  }
}

FontBold.propTypes = {

};

export default FontBold;
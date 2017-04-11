import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';

class MobileWindow extends Component {
  render() {
    const { mobileSize } = this.props;
    const windowSize = {};
    switch (mobileSize) {
      case 1: windowSize.width = 375; windowSize.height = 667; break;
      case 2: windowSize.width = 414; windowSize.height = 736; break;
      case 3: windowSize.width = 320; windowSize.height = 568; break;
      default: break;
    }
    const style = {
      width: windowSize.width,
      height: windowSize.height,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <Paper style={style} zDepth={1} />
    );
  }
}

MobileWindow.propTypes = {
  mobileSize: PropTypes.number.isRequired,
};

export default MobileWindow;

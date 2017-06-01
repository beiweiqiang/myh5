import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

class CircularProgressBg extends Component {
  render() {
    const style = {
      position: 'fixed',
      top: 0,
      left: 0,
      background: this.props.color,
      zIndex: 5,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
    return (
      <div style={style}>
        <CircularProgress size={80} thickness={5} />
      </div>
    );
  }
}

CircularProgressBg.propTypes = {
  color: PropTypes.string.isRequired,
};

CircularProgressBg.defaultProps = {
  // color: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
};

export default CircularProgressBg;

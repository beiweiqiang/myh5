import React from 'react';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

export default class MyDraggable extends React.Component {

  render() {
    const { ele, currentPage, index } = this.props;
    const { changeTextPosition } = this.props;
    const { content, size, color, bold, x, y, opacity, angle } = ele;
    const textStyle = {
      fontSize: size,
      color,
      fontWeight: `${bold ? 'bold' : 'normal'}`,
      opacity,
    };
    return (
      <Draggable
        bounds="parent"
        zIndex={5}
        defaultClassName="box"
        position={{ x: parseInt(x, 10), y: parseInt(y, 10) }}
        onStop={(evt, data) => {
          changeTextPosition(currentPage, index, data.x, data.y);
        }}
      >
        <div style={textStyle}>
          {content}
        </div>
      </Draggable>
    );
  }
}

MyDraggable.propTypes = {

  currentPage: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

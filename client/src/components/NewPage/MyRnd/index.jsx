import React, { Component, PropTypes } from 'react';
import Rnd from 'react-rnd';
import $ from 'jquery';

class MyRnd extends Component {
  render() {
    // state
    const {
      ele,
      index,
      currentPage,
    } = this.props;
    // dispatch
    const {
      changePicSize,
      changePicPosition,
      changePicSizeToPosition,
    } = this.props;
    console.log(ele);
    const { url, width, height, x, y, opacity, angle } = ele;
    return (
      <Rnd
        default={{
          x,
          y,
          width,
          height,
        }}
        style={{
          background: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundClip: 'padding-box',
          boxSizing: 'border-box',
        }}
        className="box"
        onResizeStart={(event, direction, refToElement, delta) => {
          refToElement.classList.add('addOpacity');
        }}
        onResizeStop={(event, direction, refToElement, delta) => {
          refToElement.classList.remove('addOpacity');
          console.log(delta);
          console.log(direction);
          const { width, height } = delta;
          if (direction === 'top' || direction === 'left' || direction === 'topLeft') {
            changePicSizeToPosition(currentPage, index, { width: -width, height: -height });
          }
          changePicSize(currentPage, index, { width, height });
        }}
        onDragStart={(event, data) => {
          event.target.classList.add('addOpacity');
        }}
        onDragStop={(event, data) => {
          event.target.classList.remove('addOpacity');
          console.log(data);
          changePicPosition(currentPage, index, { x: data.x, y: data.y });
        }}
      >
      </Rnd>
    );
  }
}

MyRnd.propTypes = {

};

export default MyRnd;

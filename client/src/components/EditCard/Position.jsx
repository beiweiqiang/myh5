import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';


class Position extends Component {
  render() {
    const { position } = this.props;
    const { changeTextPosition, currentTextIndex, currentPage } = this.props;

    return (
      <div>
        <TextField
          name="x"
          floatingLabelText="X"
          onChange={(event, newValue) => {
            changeTextPosition(currentPage, currentTextIndex, newValue, position.y);
          }}
          value={position.x}
          type="number"
        />
        <TextField
          name="y"
          floatingLabelText="Y"
          onChange={(event, newValue) => {
            changeTextPosition(currentPage, currentTextIndex, position.x, newValue);
          }}
          value={position.y}
          type="number"
        />
      </div>
    );
  }
}

Position.propTypes = {

};

export default Position;

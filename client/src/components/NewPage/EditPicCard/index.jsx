import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Done from 'material-ui/svg-icons/action/done';
import { blue500 } from 'material-ui/styles/colors';
import onClickOutside from 'react-onclickoutside';

import PicOpacity from './PicOpacity.jsx';
import PicAngle from './PicAngle.jsx';

class EditPicCard extends Component {
  handleClickOutside = evt => {
    this.props.togglePicEditCard(null);
  }
  
  render() {
    // state
    const {
      pages, currentPicIndex, currentPage
    } = this.props;
    // dispatch
    const {
      changePicOpacity, changePicAngle,
    } = this.props;
    const picStyle = pages[currentPage].pic[currentPicIndex];
    return (
      <Card style={{ maxWidth: '360px', padding: '0 2em 1em 2em' }}>
        <CardHeader
          title="编辑图片样式"
          style={{ paddingLeft: '0px', paddingRight: '0px', display: 'flex', alignItems: 'center' }}
          titleStyle={{ color: blue500, fontSize: '1.2em' }}
        >
          <FlatButton
            icon={<Done />}
            onTouchTap={(event) => togglePicEditCard(false)}
          />
        </CardHeader>
        <PicOpacity
          currentPage={currentPage}
          currentPicIndex={currentPicIndex}
          changePicOpacity={changePicOpacity}
          opacity={picStyle.opacity}
        />
        <PicAngle
          currentPage={currentPage}
          currentPicIndex={currentPicIndex}
          changePicAngle={changePicAngle}
          angle={picStyle.angle}
        />
      </Card>
    );
  }
}

EditPicCard.propTypes = {
};


export default onClickOutside(EditPicCard);

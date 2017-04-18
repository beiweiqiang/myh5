import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Done from 'material-ui/svg-icons/action/done';

import FontSize from './FontSize.jsx';
import ColorPick from './ColorPick.jsx';
import FontBold from './FontBold.jsx';

class EditCard extends Component {
  render() {
    return (
      <Card style={{ maxWidth: '400px' }}>
        <CardHeader
          title="编辑文本样式"
        />
      </Card>
    );
  }
}


export default EditCard;

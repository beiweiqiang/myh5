import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  // width: '320px',
  display: 'inline-block',
  margin: '1em',
};

class MyPageCard extends Component {
  render() {
    // state to props
    const {
      page,
    } = this.props;
    // dispatch
    const {} = this.props;
    return (
      <Card style={style}>
        <CardHeader
          title={page.title}
          subtitle="Subtitle"
          actAsExpander
          showExpandableButton
        />
        <CardActions>
          <FlatButton label="编辑" />
          <FlatButton label="删除" />
        </CardActions>
        <CardText expandable>
          <img src={page.qrcodeUrl} alt="qrcode" />
        </CardText>
      </Card>
    );
  }
}

MyPageCard.propTypes = {

};

export default MyPageCard;
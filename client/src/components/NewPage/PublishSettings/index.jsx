import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Done from 'material-ui/svg-icons/action/done';
import { blue500 } from 'material-ui/styles/colors';

import onClickOutside from 'react-onclickoutside';

import PublishTitle from './PublishTitle.jsx';

class PublishSettings extends Component {
  handleClickOutside = evt => {
    this.props.displayPublishSettings(false);
  }
  
  render() {
    // 
    const {
      publishTitle,
    } = this.props;
    const {
      displayPublishSettings,
      changePublishTitle,
    } = this.props;
    return (
      <Card style={{ maxWidth: '360px', padding: '0 2em 1em 2em' }}>
        <CardHeader
          title="发布设置"
          style={{ paddingLeft: '0px', paddingRight: '0px', display: 'flex', alignItems: 'center' }}
          titleStyle={{ color: blue500, fontSize: '1.2em' }}
        >
          <FlatButton
            icon={<Done />}
            onTouchTap={(event) => displayPublishSettings(false)}
          />
        </CardHeader>
        <PublishTitle
          changePublishTitle={changePublishTitle}
          publishTitle={publishTitle}
        />
      </Card>
    );
  }
}

PublishSettings.propTypes = {
  displayPublishSettings: PropTypes.func.isRequired,
};


export default onClickOutside(PublishSettings);

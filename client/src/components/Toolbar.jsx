import React, { Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class MyToolbar extends React.Component {

  render() {
    const { togglePhoneSize, addText, addPic } = this.props;

    const { mobileSize, currentPage } = this.props;
    // console.log(mobileSize);

    // let selected = 1;
    
    return (
      <Toolbar style={{ width: '100%', marginBottom: '10px' }}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu
            onChange={(event, key, value) => {
              togglePhoneSize(value);
            }}
            value={mobileSize}
          >
            <MenuItem value={1} primaryText="iphone6" />
            <MenuItem value={2} primaryText="iphone6p" />
            <MenuItem value={3} primaryText="iphone5" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton onTouchTap={(event) => addText(currentPage)} label="文本" primary={true} />
          <RaisedButton onTouchTap={(event) => addPic()} label="图片" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

MyToolbar.propTypes = {
  togglePhoneSize: PropTypes.func.isRequired,
  addText: PropTypes.func.isRequired,
  addPic: PropTypes.func.isRequired,

  mobileSize: PropTypes.number.isRequired,
};

export default MyToolbar;

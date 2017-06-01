import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from 'material-ui/List';

import Subheader from 'material-ui/Subheader';

import IconButton from 'material-ui/IconButton';

import { grey400 } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

// import { deletePage, togglePage, upMovePage, downMovePage } from '../../actions';

const iconButtonElement = (
  <IconButton>
    <MoreVertIcon color={grey400} />
  </IconButton>
);

class RightIconMenu extends Component {
  render() {
    // this.props: index, currentPage, deletePicItem
    const { index, currentPage } = this.props;

    const { deletePicItem } = this.props;

    return (
      <IconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText="删除"
          onTouchTap={(event) => {
            console.log(index);
            deletePicItem(currentPage, index);
          }}
        />
      </IconMenu>
    );
  }
}




class EditListItem extends Component {
  render() {
    const { index, url, currentPage } = this.props;
    const { togglePicEditCard, deletePicItem } = this.props;

    return (
      <ListItem
        primaryText={`图片 ${index + 1}`}
        onTouchTap={(event) => togglePicEditCard(index)}
        rightIconButton={(
          <span>
            <RightIconMenu
              {...this.props}
            />
          </span>
        )}
      />
    );
  }
}

EditListItem.propTypes = {
};

export default class EditTabPicList extends React.Component {

  render() {
    // state
    const { pages, currentPage } = this.props;
    // dispatch
    const { togglePicEditCard, deletePicItem } = this.props;
    return (
      <List>
        <Subheader>点击列表弹出样式编辑窗口</Subheader>
        {pages[currentPage].pic.map((ele, index) => (
          <EditListItem
            key={`${Date.now() + index}`}
            index={index}
            url={ele.url}
            {...this.props}
          />
        ))}
      </List>
    );
  }
}

EditTabPicList.propTypes = {
};

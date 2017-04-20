import React, { Component, PropTypes } from 'react';
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
    // this.props: index, currentPage, deleteTextItem
    const { index, currentPage } = this.props;

    const { deleteTextItem } = this.props;

    return (
      <IconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText="删除"
          onTouchTap={(event) => {
            deleteTextItem(currentPage, index);
          }}
        />
      </IconMenu>
    );
  }
}




class EditListItem extends Component {
  render() {
    const { index, content, currentPage } = this.props;
    const { toggleTextEditCard, deleteTextItem } = this.props;

    return (
      <ListItem
        primaryText={content}
        onTouchTap={(event) => toggleTextEditCard(index)}
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
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  toggleTextEditCard: PropTypes.func.isRequired,
};

export default class TabsList extends React.Component {

  render() {
    // pages, currentPage, toggleTextEditCard, deleteTextItem
    const { pages, currentPage } = this.props;
    const { toggleTextEditCard, deleteTextItem } = this.props;
    return (
      <List>
        <Subheader>点击文本弹出样式编辑窗口</Subheader>
        {pages[currentPage].text.map((ele, index) => (
          <EditListItem
            key={`${Date.now() + index}`}
            index={index}
            content={ele.content}
            {...this.props}
          />
        ))}
      </List>
    );
  }
}

TabsList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  toggleTextEditCard: PropTypes.func.isRequired,
};

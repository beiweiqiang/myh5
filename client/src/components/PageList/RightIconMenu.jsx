import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';

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
    // this.props: deletePage, upMovePage, downMovePage, index
    const { index } = this.props;

    const { deletePage, upMovePage, downMovePage } = this.props;

    return (
      <IconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText="上移"
          onTouchTap={(event) => upMovePage(index)}
        />
        <MenuItem
          primaryText="下移"
          onTouchTap={(event) => downMovePage(index)}
        />
        <MenuItem
          primaryText="删除"
          onTouchTap={(event) => deletePage(index)}
        />
      </IconMenu>
    );
  }
}

RightIconMenu.propTypes = {
  index: PropTypes.number.isRequired,

  deletePage: PropTypes.func.isRequired,
  upMovePage: PropTypes.func.isRequired,
  downMovePage: PropTypes.func.isRequired,
};

export default RightIconMenu;

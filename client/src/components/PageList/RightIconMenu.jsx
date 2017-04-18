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
    // this.props: togglePage, deletePage, upMovePage, downMovePage, index
    const { index, pages } = this.props;

    const { togglePage, deletePage, upMovePage, downMovePage } = this.props;

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
        {pages.length === 1 ? (<span></span>) : (
          <MenuItem
            primaryText="删除"
            onTouchTap={(event) => {
              togglePage(0);
              deletePage(index);
            }}
          />
        )}
      </IconMenu>
    );
  }
}

RightIconMenu.propTypes = {
  index: PropTypes.number.isRequired,

  togglePage: PropTypes.func.isRequired,
  deletePage: PropTypes.func.isRequired,
  upMovePage: PropTypes.func.isRequired,
  downMovePage: PropTypes.func.isRequired,
};

export default RightIconMenu;

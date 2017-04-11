import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';

import { grey400 } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import { deletePage, togglePage, upMovePage, downMovePage } from '../../actions';

const iconButtonElement = (
  <IconButton>
    <MoreVertIcon color={grey400} />
  </IconButton>
);

class RightIconMenu extends Component {
  render() {
    const { page } = this.props;

    const { deletePage, togglePage, upMovePage, downMovePage } = this.props;

    return (
      <IconMenu
        onTouchTap={(event) => togglePage(page)}
        iconButtonElement={iconButtonElement}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText="上移"
          onTouchTap={(event) => upMovePage()}
        />
        <MenuItem
          primaryText="下移"
          onTouchTap={(event) => downMovePage()}
        />
        <MenuItem
          primaryText="删除"
          onTouchTap={(event) => deletePage(page)}
        />
      </IconMenu>
    );
  }
}

RightIconMenu.propTypes = {
  page: PropTypes.number.isRequired,

  deletePage: PropTypes.func.isRequired,
  togglePage: PropTypes.func.isRequired,
  upMovePage: PropTypes.func.isRequired,
  downMovePage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(
  mapStateToProps,
  {
    deletePage,
    togglePage,
    upMovePage,
    downMovePage,
  }
)(RightIconMenu);

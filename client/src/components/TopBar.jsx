import React, { Component, PropTypes } from 'react';
import {
  Link,
} from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
        <Link to="/login">
          <FlatButton {...this.props} label="Login" />
        </Link>
        <Link to="/signup">
          <FlatButton {...this.props} label="Sign up" />
        </Link>
      </div>
    );
  }
}

const Logged = (props) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ color: '#fff', fontSize: '1.5em', marginRight: '10px' }}>
      {props.user.name}
    </span>
    <Avatar
      src={props.user.avatarUrl}
      size={32}
      style={{ marginRight: '10px' }}
    />
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <Link to="/">
        <MenuItem primaryText="新建H5" />
      </Link>
      <Link to="/">
        <MenuItem primaryText="我的H5" />
      </Link>
      <Link to="/logout">
        <MenuItem primaryText="退出" />

      </Link>
    </IconMenu>
  </div>
);

Logged.muiName = 'IconMenu';

/*const TopBar = (props) => (
  <AppBar
    showMenuIconButton={false}
    title={<span style={{ cursor: 'pointer' }}><Link to="/" >myh5</Link></span>}
    iconElementRight={props.user ? <Logged user={props.user} /> : <Login />}
  />
);*/

class TopBar extends Component {
  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        title={<span style={{ cursor: 'pointer' }}><Link to="/" >myh5</Link></span>}
        iconElementRight={this.props.user ? <Logged user={this.props.user} /> : <Login />}
      />
    );
  }
}

TopBar.propTypes = {
  // user: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   avatarUrl: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  // }).isRequired,
};

export default TopBar;
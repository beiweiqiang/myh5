import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import PageListItem from './PageListItem.jsx';

// import { addNewPage } from '../../actions';

class PageList extends Component {
  // this.props: togglePage, deletePage, addNewPage, upMovePage, downMovePage
  render() {
    const {
      addNewPage,
      ...rest
    } = this.props;

    return (
      <div style={{ marginBottom: '40px' }}>
        <List>
          {[1, 2, 3, 4].map((ele, index) => (<PageListItem {...rest} index={index} key={ele} />))}
        </List>
        <RaisedButton
          label="添加页"
          secondary={true}
          fullWidth={true}
          onTouchTap={(event) => addNewPage()}
        />
      </div>
    );
  }
}

PageList.propTypes = {
  addNewPage: PropTypes.func.isRequired,
};

// function map

export default PageList;

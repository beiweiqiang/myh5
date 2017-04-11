import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import PageListItem from './PageListItem.jsx';

import { addNewPage } from '../../actions';

class PageList extends Component {
  render() {
    // dispatch to props
    const { addNewPage } = this.props;

    return (
      <div style={{ marginBottom: '40px' }}>
        <List>
          {[1, 2, 3, 4].map((ele, index) => (<PageListItem {...this.props} page={index + 1} key={ele} />))}
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

export default connect(
  null,
  {
    addNewPage,
  }
)(PageList);

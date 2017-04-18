import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import PageListItem from './PageListItem.jsx';

// import { addNewPage } from '../../actions';

class PageList extends Component {
  // this.props: pages, togglePage, deletePage, addNewPage, upMovePage, downMovePage
  render() {
    const {
      pages,
      addNewPage,
      togglePage,
      ...rest
    } = this.props;

    return (
      <div style={{ marginBottom: '40px' }}>
        <List>
          {pages.map((ele, index) => (
            <PageListItem
              key={`${Date.now() + index}`}
              index={index}
              togglePage={togglePage}
              pages={pages}
              {...rest}
            />
          ))}
        </List>
        <RaisedButton
          label="添加页"
          secondary={true}
          fullWidth={true}
          onTouchTap={(event) => {
            togglePage(pages.length);
            addNewPage();
          }}
        />
      </div>
    );
  }
}

PageList.propTypes = {
  addNewPage: PropTypes.func.isRequired,
  togglePage: PropTypes.func.isRequired,
};

export default PageList;

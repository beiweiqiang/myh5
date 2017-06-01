import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div style={{ margin: '20px 0 40px 0' }}>
        <RaisedButton
          label="添加新页"
          secondary
          fullWidth
          onTouchTap={(event) => {
            togglePage(pages.length);
            addNewPage();
          }}
        />
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
      </div>
    );
  }
}

PageList.propTypes = {
  addNewPage: PropTypes.func.isRequired,
  togglePage: PropTypes.func.isRequired,
};

export default PageList;

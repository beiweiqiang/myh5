import React, { Component, PropTypes } from 'react';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import RightIconMenu from './RightIconMenu.jsx';

import { connect } from 'react-redux';

class PageListItem extends Component {
  render() {
    const { page } = this.props;
    const { togglePage, deletePage } = this.props;
    return (
      <div>
        <ListItem
          primaryText={`第 ${page} 页`}
          rightIconButton={(
            <span>
              <RightIconMenu page={page} />
            </span>
          )}
          onTouchTap={(event) => togglePage(page)}
        />
        <Divider />
      </div>
    );
  }
}

PageListItem.propTypes = {
  page: PropTypes.number.isRequired,
  togglePage: PropTypes.func.isRequired,
  deletePage: PropTypes.func.isRequired,
};


export default PageListItem;

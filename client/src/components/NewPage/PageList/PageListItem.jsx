import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import RightIconMenu from './RightIconMenu.jsx';

class PageListItem extends Component {
  render() {
    // this.props: togglePage, deletePage, upMovePage, downMovePage, index
    const { togglePage, index } = this.props;
    return (
      <div>
        <ListItem
          primaryText={`第 ${index + 1} 页`}
          rightIconButton={(
            <span>
              <RightIconMenu
                {...this.props}
              />
            </span>
          )}
          onTouchTap={(event) => togglePage(index)}
        />
        <Divider />
      </div>
    );
  }
}

PageListItem.propTypes = {
  index: PropTypes.number.isRequired,
  togglePage: PropTypes.func.isRequired,
};


export default PageListItem;

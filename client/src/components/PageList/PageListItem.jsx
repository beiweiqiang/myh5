import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import RightIconMenu from './RightIconMenu.jsx';

class PageListItem extends Component {
  render() {
    const { page } = this.props;
    // rest 包含 deletePage, upMovePage, downMovePage
    const { togglePage, ...rest } = this.props;
    return (
      <div>
        <ListItem
          primaryText={`第 ${page + 1} 页`}
          rightIconButton={(() => {
            return (
              <span>
                <RightIconMenu togglePage={togglePage} page={page} {...rest} />
              </span>
            );
          })()
          }
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
};


export default PageListItem;

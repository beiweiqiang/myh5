import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import RightIconMenu from './RightIconMenu.jsx';

class PageListItem extends Component {
  render() {
    // this.props: togglePage, deletePage, upMovePage, downMovePage, index
    // const { page } = this.props;
    // rest 包含 deletePage, upMovePage, downMovePage
    const { togglePage, index, ...rest } = this.props;
    return (
      <div>
        <ListItem
          primaryText={`第 ${index + 1} 页`}
          rightIconButton={(() => {
            return (
              <span>
                <RightIconMenu index={index} {...rest} />
              </span>
            );
          })()
          }
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { Tabs, Tab } from 'material-ui/Tabs';
import EditTabTextList from './EditTabTextList.jsx';
import EditTabPicList from './EditTabPicList.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class EditTabs extends Component {

  render() {
    // pages, currentPage, toggleTextEditCard, deleteTextItem
    // state
    const {
      pages, currentPage,
    } = this.props;
    // dispatch
    const {
      toggleTextEditCard,
      deleteTextItem,
      togglePicEditCard,
      deletePicItem,
    } = this.props;
    return (
      <Tabs>
        <Tab
          label="文本"
        >
          <EditTabTextList
            pages={pages}
            currentPage={currentPage}
            toggleTextEditCard={toggleTextEditCard}
            deleteTextItem={deleteTextItem}
          />
        </Tab>
        <Tab
          label="图片"
        >
          <EditTabPicList
            pages={pages}
            currentPage={currentPage}
            togglePicEditCard={togglePicEditCard}
            deletePicItem={deletePicItem}
          />
        </Tab>
      </Tabs>
    );
  }
}

EditTabs.propTypes = {

};

export default EditTabs;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Tabs, Tab } from 'material-ui/Tabs';
import EditTabList from './EditTabList.jsx';

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
    // pages, currentPage, toggleTextEditCard

    return (
      <Tabs>
        <Tab
          label="文本"
        >
          <EditTabList {...this.props} />
        </Tab>
        <Tab
          label="图片"
        >
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

EditTabs.propTypes = {

};

export default EditTabs;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Tabs, Tab } from 'material-ui/Tabs';
import TabList from './TabList.jsx';

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
    // rest: currentPage, toggleEditItem, changeFontSize, changeFontColor, fontBold
    const { toggleEditTabs, ...rest } = this.props;

    return (
      <Tabs>
        <Tab
          label="文本"
          onActive={(...rest) => toggleEditTabs(0)}
        >
          <TabList {...rest} />
        </Tab>
        <Tab
          label="图片"
          onActive={(...rest) => toggleEditTabs(1)}
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
  toggleEditTabs: PropTypes.func.isRequired,
};

// function mapStateToProps(state) {
//   return {

//   };
// }

// export default connect(
//   mapStateToProps,
//   {

//   }
// )(EditTabs);

export default EditTabs;

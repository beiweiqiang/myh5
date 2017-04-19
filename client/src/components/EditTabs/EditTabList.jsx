import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

import Subheader from 'material-ui/Subheader';

import TextField from 'material-ui/TextField';

import Checkbox from 'material-ui/Checkbox';
import { SketchPicker } from 'react-color';

class EditListItem extends Component {
  render() {
    const { index, content } = this.props;
    const { toggleTextEditCard } = this.props;

    return (
      <ListItem
        secondaryText={content}
        onTouchTap={(event) => toggleTextEditCard(index)}
      />
    );
  }
}

EditListItem.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  toggleTextEditCard: PropTypes.func.isRequired,
};

export default class TabsList extends React.Component {

  render() {
    // pages, currentPage, toggleTextEditCard
    const { pages, currentPage } = this.props;
    const { toggleTextEditCard } = this.props;
    return (
      <List>
        <Subheader>点击文本弹出样式编辑窗口</Subheader>
        {pages[currentPage].text.map((ele, index) => (
          <EditListItem
            key={`${Date.now() + index}`}
            index={index}
            content={ele.content}
            toggleTextEditCard={toggleTextEditCard}
          />
        ))}
      </List>
    );
  }
}

TabsList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  toggleTextEditCard: PropTypes.func.isRequired,
};

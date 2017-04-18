import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

import Subheader from 'material-ui/Subheader';

import TextField from 'material-ui/TextField';

import Checkbox from 'material-ui/Checkbox';
import { SketchPicker } from 'react-color';

class EditListItem extends Component {
  render() {
    const { index, currentPage, textStyle } = this.props;
    const { changeFontSize, changeFontColor, fontBold, toggleNestedItem } = this.props;

    return (
      <ListItem
        innerDivStyle={{ padding: '8px 40px 8px 0' }}
        secondaryText={
          <p>
            I&apos;ll be in your neighborhood doing in in errands this weekend. Do you want to grab brunch?
          </p>
        }
        secondaryTextLines={2}
        open={textStyle[index].open}
        onNestedListToggle={(listItem) => toggleNestedItem(currentPage, index, !textStyle[index].open)}
        nestedItems={[
          <ListItem
            innerDivStyle={{ padding: '0px', marginLeft: '0px' }}
            disabled={true}
            key={`${Date.now()}`}
          >
            <TextField
              name="fontSize"
              floatingLabelText="输入字体大小"
              onChange={(event, newValue) => {
                changeFontSize(currentPage, index, newValue);
              }}
              value={textStyle[index].size}
              type="number"
            />
            <SketchPicker
              color={textStyle[index].color}
              onChangeComplete={color => changeFontColor(currentPage, index, color.hex)}
            />
            <Checkbox
              style={{ margin: '6px 0px' }}
              label="加粗"
              onCheck={(event, isInputChecked) => {
                fontBold(currentPage, index, isInputChecked);
              }}
              checked={textStyle[index].bold}
            />
          </ListItem>,
        ]}
      />
    );
  }
}

export default class TabsList extends React.Component {

  render() {
    const { pages, currentPage, ...rest } = this.props;
    return (
      <List>
        <Subheader>点击箭头展开编辑界面</Subheader>
        {pages[currentPage].text.map((ele, index) => (
          <EditListItem
            currentPage={currentPage}
            key={`${Date.now() + index}`}
            index={index}
            textStyle={pages[currentPage].text}
            {...rest}
          />
        ))}
      </List>
    );
  }
}

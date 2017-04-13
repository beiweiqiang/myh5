import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

import Subheader from 'material-ui/Subheader';

import TextField from 'material-ui/TextField';

import Checkbox from 'material-ui/Checkbox';
import ColorPicker from 'material-ui-color-picker';

class EditListItem extends Component {
  render() {
    const { index } = this.props;
    // console.log('index: ', index);
    const { toggleEditItem } = this.props;

    return (
      <ListItem
        innerDivStyle={{ padding: '8px 40px 8px 0' }}
        secondaryText={
          <p>
            I&apos;ll be in your neighborhood doing in in errands this weekend. Do you want to grab brunch?
          </p>
        }
        secondaryTextLines={2}
        primaryTogglesNestedList={true}
        onNestedListToggle={() => toggleEditItem(index)}
        nestedItems={[
          <ListItem
            innerDivStyle={{ padding: '0px', marginLeft: '0px' }}
            disabled={true}
            key={1}
          >
            <TextField
              name="fontSize"
              hintText="输入字体大小"
              onChange={(event, newValue) => {
                console.log(event);
                console.log(newValue);
              }}
              type="number"
            />
            <ColorPicker
              name="colorPicker"
              hintText="选择颜色"
              id="colorPicker"
              defaultValue="#000"
              onChange={color => console.log(color)}
            />
            <Checkbox
              style={{ margin: '6px 0px' }}
              label="加粗"
            />
          </ListItem>,
        ]}
      />
    );
  }
}

export default class ListExampleNested extends React.Component {

  render() {
    return (
      <List>
        <Subheader>点击箭头展开编辑界面</Subheader>
        {[0, 1, 2].map((ele, index) => (<EditListItem key={ele} index={index} {...this.props} />))}
      </List>
    );
  }
}

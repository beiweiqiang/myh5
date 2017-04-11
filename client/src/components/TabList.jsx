import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import TextField from 'material-ui/TextField';

import Checkbox from 'material-ui/Checkbox';
import ColorPicker from 'material-ui-color-picker';

class MyListItem extends Component {
  render() {
    return (
      <div {...this.props}>
        <ListItem
          innerDivStyle={{ padding: '8px 40px 8px 0' }}
          secondaryText={
            <p>
              I&apos;ll be in your neighborhood doing in in errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem
              innerDivStyle={{ padding: '0px', marginLeft: '0px' }}
              disabled={true}
              key={1}
            >
              <TextField
                floatingLabelText="字体大小"
                type="number"
              />
              <ColorPicker
                defaultValue='#000'
                onChange={color => console.log(color)}
              />
              <Checkbox
                style={{ margin: '6px 0px' }}
                label="加粗"
              />
            </ListItem>,
          ]}
        />
      </div>
    );
  }
}

export default class ListExampleNested extends React.Component {

  render() {
    return (
      <List>
        <Subheader>点击箭头展开编辑界面</Subheader>
        {[0, 1, 2].map((ele, index) => (<MyListItem key={ele} />))}
      </List>
    );
  }
}

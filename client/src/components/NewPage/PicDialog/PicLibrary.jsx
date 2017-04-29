import React, { Component, PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { pink500, cyan500 } from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

import UploadPic from './UploadPic.jsx';

const styles = {
  root: {
    marginTop: '1em',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 400,
    overflowY: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: './img/default.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: './img/default.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: './img/default.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: './img/default.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: './img/default.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: './img/default.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: './img/default.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: './img/default.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class PicLibrary extends Component {
  render() {
    // withUpload 是否带有上传功能
    const { uploadPic } = this.props;
    return (
      <div style={styles.root}>
        <GridList
          style={styles.gridList}
          cellHeight={180}
          cols={5.2}
        >
          {tilesData.map((tile, index) => (
            <GridTile
              key={`${Date.now() + index}`}
              title={`${index + 1}`}
              titleStyle={styles.titleStyle}
              titleBackground="rgba(250, 250, 250, 0.7)"
              actionIcon={
                <FlatButton
                  labelStyle={{ color: cyan500 }}
                  label="添加"
                  onTouchTap={() => {
                    console.log('添加', index);
                  }}
                />
              }
            >
              <img src={tile.img} alt="" />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

PicLibrary.propTypes = {

};

export default PicLibrary;

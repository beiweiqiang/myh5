import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '200px',
    height: '100%',
    overflowY: 'auto',
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

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>我的模板</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.title}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;

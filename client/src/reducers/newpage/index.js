import { combineReducers } from 'redux';

import { mobileSize } from './toolbar';
import { currentPage, pages } from './pagelist';
import { currentTextIndex } from './tabs';

export default combineReducers({
  mobileSize,
  currentPage,
  currentTextIndex,
  // currentPicIndex,
  pages,
});

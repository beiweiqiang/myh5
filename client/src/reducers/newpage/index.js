import { combineReducers } from 'redux';

import { mobileSize } from './toolbar';
import { currentPage, pages } from './pagelist';
// import { activeTab, activeItem } from './tabs';



export default combineReducers({
  mobileSize,
  currentPage,
  pages,
});

import { combineReducers } from 'redux';

import { mobileSize, displayQRcode, qrcodeUrl, publishBtnDisabled, displayPublishSettings } from './toolbar';
import { currentPage, pages } from './pagelist';
import { currentTextIndex } from './tabs';

import {
  title,
} from './publishsettings';

import {
  displayPicDialog,
} from './picdialog';

export default combineReducers({
  title,
  displayPicDialog,
  displayQRcode,
  qrcodeUrl,
  publishBtnDisabled,
  displayPublishSettings,
  mobileSize,
  currentPage,
  currentTextIndex,
  // currentPicIndex,
  pages,
});

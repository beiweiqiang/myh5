import { combineReducers } from 'redux';

import {
  CHANGE_PUBLISH_TITLE,

  LOAD_CACHE_PAGES,
  CHANGE_WECHAT_DESC,
  CHANGE_WECHAT_IMG_URL,
} from '../../actions';

export function title(state = '标题', action) {
  if (action.type === CHANGE_PUBLISH_TITLE) {
    return action.title;
  }
  if (action.type === LOAD_CACHE_PAGES) {
    return action.content.title;
  }
  return state;
}

export const wechatSettings = combineReducers({
  desc(state = '', action) {
    if (action.type === CHANGE_WECHAT_DESC) {
      return action.content;
    }
    return state;
  },
  imgUrl(state = '', action) {
    if (action.type === CHANGE_WECHAT_IMG_URL) {
      return action.imgUrl;
    }
    return state;
  },
});

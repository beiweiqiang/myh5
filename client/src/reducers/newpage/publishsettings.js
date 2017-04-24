import {
  CHANGE_PUBLISH_TITLE,

  LOAD_CACHE_PAGES,
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

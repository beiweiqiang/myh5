import {
  CHANGE_PUBLISH_TITLE,
} from '../../actions';

export function title(state = '标题', action) {
  if (action.type === CHANGE_PUBLISH_TITLE) {
    return action.title;
  }
  return state;
}

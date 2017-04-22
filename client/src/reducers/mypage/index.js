
import { SAVE_MY_PUBLISH } from '../../actions';

export default function myPage(state = [], action) {
  if (action.type === SAVE_MY_PUBLISH) {
    return [
      ...state,
      action.content,
    ];
  }
  return state;
}


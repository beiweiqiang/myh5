import {
  TOGGLE_TEXT_EDIT_CARD,
  TOGGLE_PIC_EDIT_CARD,
} from '../../actions';

export function currentTextIndex(state = null, action) {
  if (action.type === TOGGLE_TEXT_EDIT_CARD) {
    return action.item;
  }
  return state;
}

export function currentPicIndex(state = null, action) {
  if (action.type === TOGGLE_PIC_EDIT_CARD) {
    return action.item;
  }
  return state;
}


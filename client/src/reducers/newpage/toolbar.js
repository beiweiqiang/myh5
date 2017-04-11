import { TOGGLE_PHONE_SIZE, ADD_TEXT, ADD_PIC } from '../../actions';

// 1 iphone6 375x667
// 2 iphone6p 414x736
// 3 iphone5 320x568
export function togglePhoneSize(state = 1, action) {
  if (action.type === TOGGLE_PHONE_SIZE) {
    return action.size;
  }
  return state;
}

export function addText(state = '', action) {
  if (action.type === ADD_TEXT) {
    return state;
  }
  return state;
}

export function addPic(state = '', action) {
  if (action.type === ADD_PIC) {
    return state;
  }
  return state;
}

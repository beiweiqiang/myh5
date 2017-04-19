import { TOGGLE_PHONE_SIZE } from '../../actions';

// 1 iphone6 375x667
// 2 iphone6p 414x736
// 3 iphone5 320x568
export function mobileSize(state = 1, action) {
  if (action.type === TOGGLE_PHONE_SIZE) {
    return action.size;
  }
  return state;
}

import {
  TOGGLE_PHONE_SIZE,
  DISPLAY_QR_CODE,
  SET_QR_CODE,
  SET_PUBLISH_BTN,
  DISPLAY_PUBLISH_SETTINGS,
} from '../../actions';

// 1 iphone6 375x667
// 2 iphone6p 414x736
// 3 iphone5 320x568
export function mobileSize(state = 1, action) {
  if (action.type === TOGGLE_PHONE_SIZE) {
    return action.size;
  }
  return state;
}

export function displayQRcode(state = false, action) {
  if (action.type === DISPLAY_QR_CODE) {
    return action.display;
  }
  return state;
}

export function qrcodeUrl(state = '', action) {
  if (action.type === SET_QR_CODE) {
    return action.url;
  }
  return state;
}

export function publishBtnDisabled(state = false, action) {
  if (action.type === SET_PUBLISH_BTN) {
    return action.disabled;
  }
  return state;
}

export function displayPublishSettings(state = false, action) {
  if (action.type === DISPLAY_PUBLISH_SETTINGS) {
    return action.display;
  }
  return state;
}

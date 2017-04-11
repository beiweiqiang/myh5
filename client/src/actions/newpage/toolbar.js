
// actions constant
// 切换手机屏幕大小
export const TOGGLE_PHONE_SIZE = 'TOGGLE_PHONE_SIZE';
// 添加文本
export const ADD_TEXT = 'ADD_TEXT';
// 添加图片
export const ADD_PIC = 'ADD_PIC';


// actions creator
// 切换手机屏幕大小
// 1 iphone6 375x667
// 2 iphone6p 414x736
// 3 iphone5 320x568
export function togglePhoneSize(size) {
  return {
    type: TOGGLE_PHONE_SIZE,
    size,
  };
}

export function addText() {
  return {
    type: ADD_TEXT,
  };
}

export function addPic() {
  return {
    type: ADD_PIC,
  };
}

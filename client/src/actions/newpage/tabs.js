// 修改字体大小
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
// 修改字体颜色
export const CHANGE_FONT_COLOR = 'CHANGE_FONT_COLOR';
// 字体加粗
export const FONT_BOLD = 'FONT_BOLD';
// 切换内嵌item
export const TOGGLE_NESTED_ITEM = 'TOGGLE_NESTED_ITEM';

// actions creator ======================

export function changeFontSize(page, item, size) {
  return {
    type: CHANGE_FONT_SIZE,
    page,
    item,
    size,
  };
}

export function changeFontColor(page, item, color) {
  return {
    type: CHANGE_FONT_COLOR,
    page,
    item,
    color,
  };
}

export function fontBold(page, item, boolean) {
  return {
    type: FONT_BOLD,
    page,
    item,
    bold: boolean,
  };
}

export function toggleNestedItem(page, item, boolean) {
  return {
    type: TOGGLE_NESTED_ITEM,
    page,
    item,
    open: boolean,
  };
}

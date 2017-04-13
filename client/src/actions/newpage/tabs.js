// 切换编辑tabs
export const TOGGLE_EDIT_TABS = 'TOGGLE_EDIT_TABS';
// 切换编辑item
export const TOGGLE_EDIT_ITEM = 'TOGGLE_EDIT_ITEM';
// 修改字体大小
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
// 修改字体颜色
export const CHANGE_FONT_COLOR = 'CHANGE_FONT_COLOR';
// 字体加粗
export const FONT_BOLD = 'FONT_BOLD';

// actions creator ======================
export function toggleEditTabs(n) {
  return {
    type: TOGGLE_EDIT_TABS,
    activeTab: n,
  };
}

// page 第几页
export function toggleEditItem(page, n) {
  return {
    type: TOGGLE_EDIT_ITEM,
    page,
    activeItem: n,
  };
}


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
    boolean,
  };
}

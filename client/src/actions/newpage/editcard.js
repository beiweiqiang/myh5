// 修改字体大小
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
// 修改字体颜色
export const CHANGE_FONT_COLOR = 'CHANGE_FONT_COLOR';
// 字体加粗
export const FONT_BOLD = 'FONT_BOLD';
// 修改文本内容
export const CHANGE_TEXT_CONTENT = 'CHANGE_TEXT_CONTENT';
// 修改文本不透明度
export const CHANGE_TEXT_OPACITY = 'CHANGE_TEXT_OPACITY';

// actions creator ======================

export function changeTextContent(page, item, content) {
  return {
    type: CHANGE_TEXT_CONTENT,
    page,
    item,
    content,
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
    bold: boolean,
  };
}

export function changeTextOpacity(page, item, opacity) {
  return {
    type: CHANGE_TEXT_OPACITY,
    page,
    item,
    opacity,
  };
}

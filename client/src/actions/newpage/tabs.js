
// 切换文本编辑窗口
export const TOGGLE_TEXT_EDIT_CARD = 'TOGGLE_TEXT_EDIT_CARD';
// 删除文本item
export const DELETE_TEXT_ITEM = 'DELETE_TEXT_ITEM';
// 切换图片编辑窗口
export const TOGGLE_PIC_EDIT_CARD = 'TOGGLE_PIC_EDIT_CARD';
// 删除图片
export const DELETE_PIC_ITEM = 'DELETE_PIC_ITEM';

// actions creator ======================

// 如果item是null，则表示不展示编辑窗口，最多展示一个编辑窗口
export function toggleTextEditCard(item) {
  return {
    type: TOGGLE_TEXT_EDIT_CARD,
    item,
  };
}

export function deleteTextItem(page, item) {
  return {
    type: DELETE_TEXT_ITEM,
    page,
    item,
  };
}

export function togglePicEditCard(item) {
  return {
    type: TOGGLE_PIC_EDIT_CARD,
    item,
  };
}

export function deletePicItem(page, item) {
  return {
    type: DELETE_PIC_ITEM,
    page,
    item,
  };
}

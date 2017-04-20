
// toggle 文本编辑窗口
export const TOGGLE_TEXT_EDIT_CARD = 'TOGGLE_TEXT_EDIT_CARD';

// 删除文本item
export const DELETE_TEXT_ITEM = 'DELETE_TEXT_ITEM';

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

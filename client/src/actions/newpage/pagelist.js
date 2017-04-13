// 切换页码
export const TOGGLE_PAGE = 'TOGGLE_PAGE';
// 删除页
export const DELETE_PAGE = 'DELETE_PAGE';
// 添加新页
export const ADD_NEW_PAGE = 'ADD_NEW_PAGE';
// 上移页
export const UP_MOVE_PAGE = 'UP_MOVE_PAGE';
// 下移页
export const DOWN_MOVE_PAGE = 'DOWN_MOVE_PAGE';

// actions creator
export function togglePage(page) {
  return {
    type: TOGGLE_PAGE,
    page,
  };
}

export function deletePage(page) {
  return {
    type: DELETE_PAGE,
    page,
  };
}

export function addNewPage() {
  return {
    type: ADD_NEW_PAGE,
  };
}

export function upMovePage(page) {
  return {
    type: UP_MOVE_PAGE,
    page,
  };
}

export function downMovePage(page) {
  return {
    type: DOWN_MOVE_PAGE,
    page,
  };
}

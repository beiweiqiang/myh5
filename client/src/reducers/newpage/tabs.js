import { TOGGLE_EDIT_TABS, TOGGLE_EDIT_ITEM, CHANGE_FONT_SIZE, CHANGE_FONT_COLOR, FONT_BOLD } from '../../actions';

// 当前active的tab **感觉这个没用
export function activeTab(state = 0, action) {
  if (action.type === TOGGLE_EDIT_TABS) {
    return action.activeTab;
  }
  return state;
}

// 当前选中的文本
export function activeItem(state = 0, action) {
  if (action.type === TOGGLE_EDIT_ITEM) {
    return action.activeItem;
  }
  return state;
}


// export function fontSize(state = )

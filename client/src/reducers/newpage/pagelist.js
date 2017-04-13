import { TOGGLE_PAGE, DELETE_PAGE, ADD_NEW_PAGE } from '../../actions';

export function currentPage(state = 0, action) {
  if (action.type === TOGGLE_PAGE) {
    return action.page;
  }
  return state;
}

export function deletePage(state = 0, action) {
  if (action.type === DELETE_PAGE) {
    return action.page;
  }
  return state;
}

import {
  SPIN_LOADING,
  DISPLAY_SNACKBAR,
} from '../actions';

export signup from './signup';

export login from './login';

export { user, sendRequest } from './user';

export newPage from './newpage';
export myPage from './mypage';


export function displaySnackbar(state = false, action) {
  if (action.type === DISPLAY_SNACKBAR) {
    return action.display;
  }
  return state;
}

export function loading(state = false, action) {
  if (action.type === SPIN_LOADING) {
    if (action.loading === true) return true;
    return false;
  }
  return state;
}

// 打印action type
export function logger(state = '', action) {
  return action;
}

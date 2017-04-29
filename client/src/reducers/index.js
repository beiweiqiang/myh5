import {
  SPIN_LOADING,
  DISPLAY_SNACKBAR,
} from '../actions';

export signup from './signup';

export login from './login';

export {
  user,
  sendRequest,
} from './user';

export newPage from './newpage';
export myPage from './mypage';

export {
  myUploadPic,
} from './newpage/picdialog';

const snackbarInit = {
  open: false,
  mes: '',
};
export function snackbar(state = snackbarInit, action) {
  if (action.type === DISPLAY_SNACKBAR) {
    return {
      open: action.open,
      mes: action.mes,
    };
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

import { SPIN_LOADING } from '../actions';

export signup from './signup';

export login from './login';

export { user, sendRequest } from './user';


// export { togglePhoneSize, addText, addPic } from './newpage/toolbar';
// export { currentPage, deletePage } from './newpage/pagelist';
// export { activeTab, activeItem } from './newpage/tabs';

export newPage from './newPage';


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

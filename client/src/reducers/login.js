import { combineReducers } from 'redux';

import { LOGIN_SUCCESS, LOGIN_ERROR_MESSAGE, VALIDATE_LOGIN_FORM, LOGIN_FORM_INPUT } from '../actions';

// 登录出错信息，可能是用户已存在
function errMes(state = '', action) {
  if (action.type === LOGIN_ERROR_MESSAGE) {
    return action.message;
  }
  return state;
}


// 登录表单输入
const inputInitial = {
  email: '',
  password: '',
};
function formInput(state = inputInitial, action) {
  if (action.type === LOGIN_FORM_INPUT) {
    if (action.clean) return inputInitial;
    return Object.assign({}, state, action.input);
  }
  return state;
}

// 登录成功状态
function success(state = false, action) {
  if (action.type === LOGIN_SUCCESS) {
    return action.success;
  }
  return state;
}

// 登录表单验证信息
function validateMes(state = {
  email: '',
  password: '',
}, action) {
  if (action.type === VALIDATE_LOGIN_FORM) {
    return Object.assign({}, state, {
      email: action.validateErr.email,
      password: action.validateErr.password,
    });
  }
  return state;
}

export default combineReducers({
  errMes,
  formInput,
  success,
  validateMes,
});

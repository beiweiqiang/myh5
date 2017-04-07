import { LOGIN_SUCCESS, LOGIN_ERROR_MESSAGE, VALIDATE_LOGIN_FORM, LOGIN_FORM_INPUT } from '../actions';

// 登录出错信息，可能是用户已存在
export function loginErrMessage(state = '', action) {
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
export function loginFormInput(state = inputInitial, action) {
  if (action.type === LOGIN_FORM_INPUT) {
    if (action.clean) return inputInitial;
    return Object.assign({}, state, action.input);
  }
  return state;
}

// 登录成功状态
export function loginSuccess(state = false, action) {
  if (action.type === LOGIN_SUCCESS) {
    return action.success;
  }
  return state;
}

// 登录表单验证信息
export function validateLogin(state = {
  email: '',
  password: '',
  // valid: false,
}, action) {
  if (action.type === VALIDATE_LOGIN_FORM) {
    return Object.assign({}, state, {
      // name: action.validateErr.name,
      email: action.validateErr.email,
      password: action.validateErr.password,
      // confirm: action.validateErr.confirm,
    });
  }
  return state;
}

// 显示 “注册成功” 的信息
// export function signupSuccessMessage(state = '', action) {
//   if (action.type === SIGNUP_SUCCESS_MESSAGE) {
//     if (action.clean) return '';
//     return action.text;
//   }
//   return state;
// }


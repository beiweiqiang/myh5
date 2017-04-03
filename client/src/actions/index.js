

// 登录
export const LOGIN = 'LOGIN';
// 退出登录
export const LOGOUT = 'LOGOUT';
// 注册
export const SIGNUP = 'SIGNUP';
// 上传头像

// 验证注册表单填写是否合法
export const VALIDATE_SIGNUP_FORM = 'VALIDATE_SIGNUP_FORM';

export function increase(n) {
  return {
    type: 'INCREASE',
    amount: n,
  };
}

export function decrease(n) {
  return {
    type: 'DECREASE',
    amount: n,
  };
}


export function login(user) {
  return {
    type: LOGIN,
    user,
  };
}

export function signup(user) {
  return {
    type: SIGNUP,
    user,
  };
}

export function validateSignUpForm(signUpContent) {
  return {
    type: VALIDATE_SIGNUP_FORM,
    signUpContent,
  };
}


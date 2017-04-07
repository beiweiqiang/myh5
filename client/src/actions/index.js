
// actions 常量 ============================================================

// circular progress 加载
export const SPIN_LOADING = 'SPIN_LOADING';

// **关于 signUp
export { SIGNUP_SUCCESS, SIGNUP_ERROR_MESSAGE, VALIDATE_SIGNUP_FORM, SIGNUP_FORM_INPUT, SIGNUP_SUCCESS_MESSAGE } from './signup';

// **关于 login
export { LOGIN_SUCCESS, LOGIN_ERROR_MESSAGE, VALIDATE_LOGIN_FORM, LOGIN_FORM_INPUT } from './login';

// **关于 user
export { SAVE_USER_MESSAGE, REQUEST_FINISH } from './user';

// action creator =========================================================

// **关于 signup
export { signupSuccess, submitSignup, signUpFormInput, signupSuccessMessage } from './signup';

// **关于 login
export { loginSuccess, submitLogin, loginFormInput } from './login';

// **关于 user
export { saveUserMes, getUserMes } from './user';

// 是否正在加载
export function loading(boolean = false) {
  return {
    type: SPIN_LOADING,
    loading: boolean,
  };
}

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


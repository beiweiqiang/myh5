import $ from 'jquery';

import Auth from '../modules/Auth';
import {
  loading,
  saveUserMes,
  setPublishBtn,
} from './index';

// 登录成功
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// 登录失败信息
export const LOGIN_ERROR_MESSAGE = 'LOGIN_ERROR_MESSAGE';
// 验证表单输入是否合法
export const VALIDATE_LOGIN_FORM = 'VALIDATE_LOGIN_FORM';
// 登录表单输入
export const LOGIN_FORM_INPUT = 'LOGIN_FORM_INPUT';

// 提交登录表单 action creator ========================================================

function validateLoginForm(payload) {
  const errors = {
    email: '',
    password: '',
  };
  let isFormValid = true;

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = '请输入 email';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = '请输入 password';
  }

  if (!isFormValid) {
    errors.message = '表单填写不合法，请修改';
  }

  return {
    errors,
    isFormValid,
  };
}


// 传入true表示登录成功，跳转到 /
// 传入false取消登录成功状态，不会进行跳转
export function loginSuccess(boolean) {
  return {
    type: LOGIN_SUCCESS,
    success: boolean,
  };
}


// 登录失败，可能是因为用户不存在 或者 密码错误
function loginErrMessage(message) {
  return {
    type: LOGIN_ERROR_MESSAGE,
    message,
  };
}

export function loginFormInput(input, boolean = false) {
  return {
    type: LOGIN_FORM_INPUT,
    input,
    clean: boolean,
  };
}

function submitValidateLogin(formData) {
  return (dispatch) => {
    // **加载loading界面
    dispatch(loading(true));

    // **AJAX 请求
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const resMessage = $.parseJSON(JSON.stringify(xhr.response));

      if (xhr.status !== 200 || !resMessage.success) {
        // **登录失败
        dispatch(loginErrMessage(resMessage.message));
      } else {
        // **登录成功
        dispatch(loginSuccess(true));
        // 发布按钮可以使用
        dispatch(setPublishBtn(false));
        // **保存token
        Auth.authenticateUser(resMessage.token);
        dispatch(loginFormInput({}, true));

        // 保存用户信息
        dispatch(saveUserMes(resMessage.user.userAccount));
      }

      // **取消loading
      dispatch(loading(false));
    });
    xhr.send(JSON.stringify(formData));
  };
}

// 登录表单填写不合法，在每个填写栏下方显示出错提示
function validateLogin(validateErr) {
  return {
    type: VALIDATE_LOGIN_FORM,
    validateErr,
  };
}

// 总按钮，提交登录表单，点击以后先进行表单验证
export function submitLogin(loginContent) {
  return (dispatch) => {
    const validateRes = validateLoginForm(loginContent);
    if (validateRes.isFormValid) {
      const { email, password } = loginContent;
      const formData = {
        email,
        password,
      };
      // 表单填写验证成功，提交进行对比
      return dispatch(submitValidateLogin(formData));
    }
    // 显示表单填写验证错误
    return dispatch(validateLogin(validateRes.errors));
  };
}


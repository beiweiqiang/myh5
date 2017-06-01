import validator from 'validator';
import $ from 'jquery';
import Identicon from 'identicon.js';

import { loading } from './index';

// 注册成功
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

// 注册失败信息
export const SIGNUP_ERROR_MESSAGE = 'SIGNUP_ERROR_MESSAGE';

// 验证表单输入是否合法
export const VALIDATE_SIGNUP_FORM = 'VALIDATE_SIGNUP_FORM';

// 注册表单输入
export const SIGNUP_FORM_INPUT = 'SIGNUP_FORM_INPUT';

// 注册成功信息
export const SIGNUP_SUCCESS_MESSAGE = 'SIGNUP_SUCCESS_MESSAGE';

// 提交注册表单 action creator ========================================================

// 显示 注册成功 的消息
export function signupSuccessMessage(text = '') {
  return {
    type: SIGNUP_SUCCESS_MESSAGE,
    text,
  };
}

function validateSignupForm(payload) {
  const errors = {
    email: '',
    name: '',
    password: '',
    confirm: '',
  };
  let isFormValid = true;
  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'email 不合法';
  }

  // **这里可以修改长度小于8不通过
  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = '密码至少 8 位';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'name 不合法';
  }

  if (!payload || typeof payload.confirm !== 'string' || payload.confirm.trim().length === 0 || payload.confirm.trim() !== payload.password.trim()) {
    isFormValid = false;
    errors.confirm = '密码不相同';
  }

  if (!isFormValid) {
    errors.message = '表单填写不合法，请修改';
  }
  return { errors, isFormValid };
}


// 传入true表示注册成功，跳转到 /login
// 传入false取消注册成功状态，不会进行跳转
export function signupSuccess(boolean) {
  return {
    type: SIGNUP_SUCCESS,
    success: boolean,
  };
}


// 注册失败，可能是因为用户已存在
function signupErrMessage(message) {
  return {
    type: SIGNUP_ERROR_MESSAGE,
    message,
  };
}

export function signUpFormInput(input, boolean = false) {
  return {
    type: SIGNUP_FORM_INPUT,
    input,
    clean: boolean,
  };
}

function submitSignupValidate(formData) {
  return (dispatch) => {
    dispatch(loading(true));

    // **AJAX 请求
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const resMessage = $.parseJSON(JSON.stringify(xhr.response));

      if (xhr.status !== 200 || !resMessage.success) {
        // **注册失败
        dispatch(signupErrMessage(resMessage.error));
      } else {
        // 在登录页面显示 注册成功 的消息
        dispatch(signupSuccessMessage(resMessage.message));

        // 发送注册成功状态，进行跳转
        dispatch(signupSuccess(true));

        // 清除注册表单已填内容
        dispatch(signUpFormInput({}, true));
      }

      // **取消loading
      dispatch(loading(false));
    });
    xhr.send(JSON.stringify(formData));

    // $.ajax({
    //   url: '/auth/signup',
    //   type: 'post',
    //   dataType: 'json',
    //   // data: formData,
    //   data: JSON.stringify(formData),
    //   error(err) {
    //     console.log(err);
    //     dispatch(loading(false));
    //   },
    //   success(res) {
    //     // console.log('ajax res');
    //     // console.log(res);
    //     if (res.success) {
    //       // 在登录页面显示 注册成功 的消息
    //       dispatch(signupSuccessMessage(res.message));

    //       // 发送注册成功状态，进行跳转
    //       dispatch(signupSuccess(true));

    //       // 清除注册表单已填内容
    //       dispatch(signUpFormInput({}, true));
    //     } else {
    //       dispatch(signupErrMessage(res.error));
    //     }
    //     dispatch(loading(false));
    //   },
    // });
  };
}

// 注册表单填写不合法，在每个填写栏下方显示出错提示
function validateSignup(validateErr) {
  return {
    type: VALIDATE_SIGNUP_FORM,
    validateErr,
  };
}

function generateHash() {
  let text = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// 总按钮，提交注册表单，点击以后先进行表单验证
export function submitSignup(signUpContent) {
  return (dispatch) => {
    const validateRes = validateSignupForm(signUpContent);
    if (validateRes.isFormValid) {
      const { name, email, password } = signUpContent;
      const data = new Identicon(generateHash()).toString();
      const avatarUrl = `data:image/png;base64,${data}`;
      // const formData = `name=${name}&email=${email}&password=${password}&avatarUrl=${avatarUrl}`;
      const formData = {
        name,
        email,
        password,
        avatarUrl,
      };
      return dispatch(submitSignupValidate(formData));
    }
    return dispatch(validateSignup(validateRes.errors));
  };
}


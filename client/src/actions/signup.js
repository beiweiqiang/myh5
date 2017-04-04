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

// 提交注册表单 action creator ========================================================

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


export function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS,
  };
}



function signupErrMessage(message) {
  return {
    type: SIGNUP_ERROR_MESSAGE,
    message,
  };
}

function submitSignupValidate(formData) {
  return (dispatch) => {
    dispatch(loading(true));

    // **create an AJAX request

    // const xhr = new XMLHttpRequest();
    // xhr.open('post', '/auth/signup');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   dispatch(loading(false));
    //   // **{success: boolean , [message | error]: string}
    //   const resMessage = $.parseJSON(JSON.stringify(xhr.response));
    //   if (xhr.status !== 200 || !resMessage.success) {
    //     return dispatch(signupErrMessage(resMessage.error));
    //   }

    //   // **localStorage 存储注册成功的消息，用于login页面显示 flash 消息
    //   localStorage.setItem('successMessage', resMessage.message);

    //   return dispatch(signupSuccess());
    // });
    // xhr.send(formData);

    $.ajax({
      url: '/auth/signup',
      type: 'post',
      dataType: 'json',
      data: formData,
      error(err) {
        console.log(err);
        dispatch(loading(false));
      },
      success(res) {
        // console.log('ajax res');
        // console.log(res);
        if (res.success) {
          localStorage.setItem('successMessage', res.message);
          dispatch(signupSuccess());
        } else {
          dispatch(signupErrMessage(res.error));
        }
        dispatch(loading(false));
      },
    });
  };
}

function validateSignup(validateErr) {
  return {
    type: VALIDATE_SIGNUP_FORM,
    validateErr,
  };
}

export function submitSignup(signUpContent) {
  return (dispatch) => {
    const validateRes = validateSignupForm(signUpContent);
    if (validateRes.isFormValid) {
      const { name, email, password } = signUpContent;
      const data = new Identicon().toString();
      const avatarUrl = `data:image/png;base64,${data}`;
      const formData = `name=${name}&email=${email}&password=${password}&avatarUrl=${avatarUrl}`;
      return dispatch(submitSignupValidate(formData));
    }
    return dispatch(validateSignup(validateRes.errors));
  };
}

export function signUpFormInput(input) {
  return {
    type: SIGNUP_FORM_INPUT,
    input,
  };
}

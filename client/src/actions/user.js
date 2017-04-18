import $ from 'jquery';

import Auth from '../modules/Auth';
import { loading } from './index';

// **保存用户信息
export const SAVE_USER_MESSAGE = 'SAVE_USER_MESSAGE';

// **完成请求，无论本地有没有token
export const REQUEST_FINISH = 'REQUEST_FINISH';

// 保存用户信息
export function saveUserMes(user) {
  return {
    type: SAVE_USER_MESSAGE,
    user,
  };
}

function sendRequest(boolean = false) {
  return {
    type: REQUEST_FINISH,
    finish: boolean,
  };
}

// ajax获取用户信息
export function getUserMes() {
  return (dispatch) => {
    dispatch(loading(true));

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/topbar');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const resMessage = $.parseJSON(JSON.stringify(xhr.response));
      if (xhr.status === 200) {
        dispatch(saveUserMes(resMessage.user));
      }
      dispatch(loading(false));
    });
    xhr.send();
    // 发起一次请求以后dispatch
    dispatch(sendRequest(true));
  };
}

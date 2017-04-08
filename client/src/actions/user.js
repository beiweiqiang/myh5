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

function requestFinish(boolean = false) {
  return {
    type: REQUEST_FINISH,
    finish: boolean,
  };
}

// ajax获取用户信息
export function getUserMes() {
  return (dispatch) => {
    dispatch(loading(true));

    // **先取消ajax**  减少加载时间******
    // const xhr = new XMLHttpRequest();
    // xhr.open('get', '/api/topbar');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // // set the authorization HTTP header
    // xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {

    //   const resMessage = $.parseJSON(JSON.stringify(xhr.response));
    //   if (xhr.status === 200) {
    //     dispatch(saveUserMes(resMessage.user));
    //   }
    //   dispatch(loading(false));
    //   dispatch(requestFinish(true));
    // });
    // xhr.send();

    // 以下是额外代码
    dispatch(saveUserMes({
      name: '1',
      email: '1@1.com',
      avatarUrl: './img/default.jpg',
    }));
    dispatch(loading(false));
    dispatch(requestFinish(true));
  };
}

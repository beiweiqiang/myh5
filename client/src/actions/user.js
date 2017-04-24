import $ from 'jquery';

import Auth from '../modules/Auth';
import { loading, saveMyPublish } from './index';

// **保存用户信息
export const SAVE_USER_MESSAGE = 'SAVE_USER_MESSAGE';

// **完成请求，无论本地有没有token
export const REQUEST_FINISH = 'REQUEST_FINISH';

// 加载本地暂存h5
export const LOAD_CACHE_PAGES = 'LOAD_CACHE_PAGES';

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

function loadCachePages(content) {
  return {
    type: LOAD_CACHE_PAGES,
    content,
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
      // console.log(resMessage);
      if (xhr.status === 200) {
        // 加载本地暂存h5
        const content = localStorage.getItem('savedH5');
        if (content !== null) dispatch(loadCachePages(JSON.parse(content)));

        // 加载数据库内容
        dispatch(saveUserMes(resMessage.user.userAccount));
        resMessage.user.myH5.map((ele, index) => dispatch(saveMyPublish(ele)));
      }
      dispatch(loading(false));
    });
    xhr.send();
    // 发起一次请求以后dispatch
    dispatch(sendRequest(true));
  };
}

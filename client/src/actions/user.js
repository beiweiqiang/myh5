import $ from 'jquery';

import Auth from '../modules/Auth';
import {
  loading,
  saveMyPublish,
  setPublishBtn,
  addPicToMyUpload,
  changeWechatImgUrl,
  changeWechatDesc,
} from './index';

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
    // 显示正在加载
    dispatch(loading(true));
    // 发布按钮disabled
    dispatch(setPublishBtn(true));
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/topbar');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const resMessage = $.parseJSON(JSON.stringify(xhr.response));
      console.log(resMessage);
      if (xhr.status === 200) {
        // 发布按钮可以使用
        dispatch(setPublishBtn(false));

        // 加载本地暂存h5
        let content = localStorage.getItem('savedH5');
        if (content !== null) {
          content = JSON.parse(content);
          dispatch(loadCachePages(content));
          // 微信分享图标
          dispatch(changeWechatImgUrl(content.wechatSettings.img));
          // 微信分享描述
          dispatch(changeWechatDesc(content.wechatSettings.desc));
        }
        // 加载数据库内容
        // 获取用户信息
        dispatch(saveUserMes(resMessage.user.userAccount));
        // 获取用户所发布的h5
        resMessage.user.myH5.map((ele, index) => dispatch(saveMyPublish(ele)));
        // 获取用户已上传的图片
        dispatch(addPicToMyUpload(resMessage.user.uploadPic));
      }
      dispatch(loading(false));
    });
    xhr.send();
    // 发起一次请求以后dispatch
    dispatch(sendRequest(true));
  };
}

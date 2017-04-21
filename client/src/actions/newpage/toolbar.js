import { loading } from '../index';
import $ from 'jquery';
import Auth from '../../modules/Auth';
// import jq-qucode from 'jr-qrcode';
const jrQrcode = require('jr-qrcode');

// actions constant
// 切换手机屏幕大小
export const TOGGLE_PHONE_SIZE = 'TOGGLE_PHONE_SIZE';
// 添加文本
export const ADD_TEXT = 'ADD_TEXT';
// 添加图片
export const ADD_PIC = 'ADD_PIC';
// 发布h5
export const PUBLISH_H5 = 'PUBLISH_H5';
// 展示二维码
export const DISPLAY_QR_CODE = 'DISPLAY_QR_CODE';
// 设置二维码
export const SET_QR_CODE = 'SET_QR_CODE';
// 设置发布按钮状态
export const SET_PUBLISH_BTN = 'SET_PUBLISH_BTN';

// actions creator
// 切换手机屏幕大小
// 1 iphone6 375x667
// 2 iphone6p 414x736
// 3 iphone5 320x568
export function togglePhoneSize(size) {
  return {
    type: TOGGLE_PHONE_SIZE,
    size,
  };
}

export function addText(page) {
  return {
    type: ADD_TEXT,
    page,
  };
}

export function addPic(page, picUrl, width, height) {
  return {
    type: ADD_PIC,
    picUrl,
    width,
    height,
  };
}

function setPublishBtn(boolean) {
  return {
    type: SET_PUBLISH_BTN,
    disabled: boolean,
  };
}

export function displayQRcode(boolean) {
  return {
    type: DISPLAY_QR_CODE,
    display: boolean,
  };
}

export function setQRcode(url) {
  return {
    type: SET_QR_CODE,
    url,
  };
}

function generateQRcode(url) {
  return (dispatch) => {
    const imgBase64 = jrQrcode.getQrBase64(url);
    dispatch(setQRcode(imgBase64));
    dispatch(setPublishBtn(false));
    dispatch(displayQRcode(true));
  };
}

function upload(content) {
  return (dispatch) => {
    // **加载loading界面
    dispatch(setPublishBtn(true));

    // **AJAX 请求
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/publish');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const resMessage = $.parseJSON(JSON.stringify(xhr.response));
      // console.log(resMessage);
      const url = resMessage.url;
      dispatch(generateQRcode(url));
    //   if (xhr.status !== 200 || !resMessage.success) {
    //     // **登录失败
    //     dispatch(loginErrMessage(resMessage.message));
    //   } else {
    //     // **登录成功
    //     dispatch(loginSuccess(true));
    //     // **保存token
    //     Auth.authenticateUser(resMessage.token);
    //     dispatch(loginFormInput({}, true));

    //     // 保存用户信息
    //     dispatch(saveUserMes(resMessage.user));
    //   }

    //   // **取消loading
    //   dispatch(loading(false));
    });
    xhr.send(JSON.stringify(content));
  };
}

export function publishH5(content) {
  return (dispatch) => {
    return dispatch(upload(content));
  };
}

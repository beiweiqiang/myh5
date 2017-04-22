import $ from 'jquery';
import Auth from '../../modules/Auth';

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
// 展示发布设置
export const DISPLAY_PUBLISH_SETTINGS = 'DISPLAY_PUBLISH_SETTINGS';
// 保存发布了的h5
export const SAVE_MY_PUBLISH = 'SAVE_MY_PUBLISH';
// 保存正在编辑的h5
export const SAVE_MY_EDIT_PAGES = 'SAVE_MY_EDIT_PAGES';


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

// 添加文本
export function addText(page) {
  return {
    type: ADD_TEXT,
    page,
  };
}

// 添加图片
export function addPic(page, picUrl, width, height) {
  return {
    type: ADD_PIC,
    picUrl,
    width,
    height,
  };
}

// 设置发布按钮的disabled状态
function setPublishBtn(boolean) {
  return {
    type: SET_PUBLISH_BTN,
    disabled: boolean,
  };
}


// 是否展示qrcode的dialog窗口
export function displayQRcode(boolean) {
  return {
    type: DISPLAY_QR_CODE,
    display: boolean,
  };
}

// 设置qrcode的图片url
export function setQRcode(url) {
  return {
    type: SET_QR_CODE,
    url,
  };
}

// 保存发布了的h5
function saveMyPublish(content) {
  return {
    type: SAVE_MY_PUBLISH,
    content,
  };
}

// 是否展示发布设置
export function displayPublishSettings(boolean) {
  return {
    type: DISPLAY_PUBLISH_SETTINGS,
    display: boolean,
  };
}

// ajax把pages信息发送到后台然后上传到七牛云 生成二维码
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
      const url = $.parseJSON(JSON.stringify(xhr.response)).url;
      const imgBase64 = jrQrcode.getQrBase64(url);
      dispatch(setQRcode(imgBase64));
      dispatch(setPublishBtn(false));
      dispatch(displayQRcode(true));
      dispatch(saveMyPublish({
        pages: content.pages,
        qrcodeUrl: imgBase64,
        createTime: Date.now(),
        title: content.title,
      }));
    });
    xhr.send(JSON.stringify(content));
  };
}

export function publishH5(content) {
  return (dispatch) => {
    return dispatch(upload(content));
  };
}

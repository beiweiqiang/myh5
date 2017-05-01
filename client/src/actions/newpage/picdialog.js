import $ from 'jquery';
import Auth from '../../modules/Auth';
import {
  displaySnackbar,
} from '../index';

// 添加图片到我的上传
export const ADD_PIC_TO_MY_UPLOAD = 'ADD_PIC_TO_MY_UPLOAD';
// 切换展示图片选择dialog
export const TOGGLE_PIC_DIALOG = 'TOGGLE_PIC_DIALOG';
// 添加图片
export const ADD_PIC = 'ADD_PIC';

// 因为拉伸或减小 左边或上边 而产生的位置改变
export const CHANGE_PIC_SIZE_TO_POSITION = 'CHANGE_PIC_SIZE_TO_POSITION';
// 修改图片宽高
export const CHANGE_PIC_SIZE = 'CHANG_PIC_SIZE';
// 修改图片位置
export const CHANGE_PIC_POSITION = 'CHANGE_PIC_POSITION';
// 修改图片不透明度
export const CHANGE_PIC_OPACITY = 'CHANGE_PIC_OPACITY';
// 修改图片角度
export const CHANGE_PIC_ANGLE = 'CHANGE_PIC_ANGLE';

// delta: { width: Number, height: Number } 这两个都是相差值
export function changePicSizeToPosition(page, item, delta) {
  return {
    type: CHANGE_PIC_SIZE_TO_POSITION,
    page,
    item,
    delta,
  };
}

// size: { width: Number, height: Number }
export function changePicSize(page, item, size) {
  return {
    type: CHANGE_PIC_SIZE,
    page,
    item,
    size,
  };
}

// position: { x: Number, y: Number }
export function changePicPosition(page, item, position) {
  return {
    type: CHANGE_PIC_POSITION,
    page,
    item,
    position,
  };
}

// opacity: Number 0.0 ~ 1.0(不透明)
export function changePicOpacity(page, item, opacity) {
  return {
    type: CHANGE_PIC_OPACITY,
    page,
    item,
    opacity,
  };
}

// angle: Number
export function changePicAngle(page, item, angle) {
  return {
    type: CHANGE_PIC_ANGLE,
    page,
    item,
    angle,
  };
}



export function togglePicDialog(boolean) {
  return {
    type: TOGGLE_PIC_DIALOG,
    display: boolean,
  };
}

export function addPicToMyUpload(picArr) {
  return {
    type: ADD_PIC_TO_MY_UPLOAD,
    picArr,
  };
}

// page 图片放在哪一页
// url 图片url
export function addPic(page, url) {
  return {
    type: ADD_PIC,
    page,
    url,
  };
}

export function uploadPic(files) {
  return (dispatch) => {
    if (files.length > 0) {
      // create a FormData object which will be sent as the data payload in the
      const formData = new FormData();

      // 最多上传5张
      for (let i = 0; i < files.length && i < 5; i += 1) {
        const file = files[i];

        // add the files to formData object for the data payload
        formData.append('uploads[]', file, file.name);
      }

      // **AJAX 请求
      const xhr = new XMLHttpRequest();
      xhr.open('post', '/api/picUpload');
      // xhr.setRequestHeader('Content-type', 'application/json');
      xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        // uploadPicUrlArr
        if (xhr.status === 200) {
          const uploadPicArr = $.parseJSON(JSON.stringify(xhr.response)).uploadPicUrlArr;
          dispatch(displaySnackbar(true, '图片上传完成'));
          dispatch(addPicToMyUpload(uploadPicArr));
          // console.log(uploadPicArr);
        }
      });
      xhr.send(formData);

      // $.ajax({
      //   url: '/upload',
      //   method: 'POST',
      //   data: formData,
      //   processData: false,
      //   contentType: false,
      //   success(data) {
      //     console.log('upload successful!\n' + data);
      //   },
        // xhr() {
        //   // create an XMLHttpRequest
        //   const xhr = new XMLHttpRequest();

        //   // listen to the 'progress' event
        //   xhr.upload.addEventListener('progress', (evt) => {

        //     if (evt.lengthComputable) {
        //       // calculate the percentage of upload completed
        //       var percentComplete = evt.loaded / evt.total;
        //       percentComplete = parseInt(percentComplete * 100);

        //       // update the Bootstrap progress bar with the new percentage
        //       $('.progress-bar').text(percentComplete + '%');
        //       $('.progress-bar').width(percentComplete + '%');

        //       // once the upload reaches 100%, set the progress bar text to done
        //       if (percentComplete === 100) {
        //         $('.progress-bar').html('Done');
        //       }

        //     }

        //   }, false);

        //   return xhr;
        // }
      // });
    }
  };
}

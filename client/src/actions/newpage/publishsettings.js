import $ from 'jquery';
import Auth from '../../modules/Auth';

export const CHANGE_PUBLISH_TITLE = 'CHANGE_PUBLISH_TITLE';
export const CHANGE_WECHAT_DESC = 'CHANGE_WECHAT_DESC';
export const CHANGE_WECHAT_IMG_URL = 'CHANGE_WECHAT_IMG_URL';

export function changePublishTitle(title) {
  return {
    type: CHANGE_PUBLISH_TITLE,
    title,
  };
}

export function changeWechatDesc(content) {
  return {
    type: CHANGE_WECHAT_DESC,
    content,
  };
}

export function changeWechatImgUrl(imgUrl) {
  return {
    type: CHANGE_WECHAT_IMG_URL,
    imgUrl,
  };
}

export function uploadWechatImgUrl(file) {
  return (dispatch) => {
    const formData = new FormData();
    formData.append('uploads[]', file, file.name);

    // **AJAX 请求
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/wechatImgUpload');
    // xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    // xhr.upload.addEventListener('progress', (evt) => {
    //   if (evt.lengthComputable) {
    //     // calculate the percentage of upload completed
    //     var percentComplete = evt.loaded / evt.total;
    //     percentComplete = parseInt(percentComplete * 100);

    //     // update the Bootstrap progress bar with the new percentage
    //     $('.progress-bar').text(percentComplete + '%');
    //     $('.progress-bar').width(percentComplete + '%');

    //     // once the upload reaches 100%, set the progress bar text to done
    //     if (percentComplete === 100) {
    //       $('.progress-bar').html('Done');
    //     }
    //   }
    // }, false);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // const url = JSON.parse(xhr.response).url;
        const url = `${$.parseJSON(JSON.stringify(xhr.response)).url}?imageView2/1/h/200`;
        console.log(url);
        dispatch(changeWechatImgUrl(url));
      }
    });
    xhr.send(formData);
  };
}

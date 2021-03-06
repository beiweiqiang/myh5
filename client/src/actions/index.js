
// actions 常量 ============================================================

// circular progress 加载
export const SPIN_LOADING = 'SPIN_LOADING';

// **关于 signUp
export {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR_MESSAGE,
  VALIDATE_SIGNUP_FORM,
  SIGNUP_FORM_INPUT,
  SIGNUP_SUCCESS_MESSAGE,
} from './signup';

// **关于 login
export {
  LOGIN_SUCCESS,
  LOGIN_ERROR_MESSAGE,
  VALIDATE_LOGIN_FORM,
  LOGIN_FORM_INPUT,
} from './login';

// **关于 user
export {
  // 保存用户信息
  SAVE_USER_MESSAGE,
  // 发送完成一个请求
  REQUEST_FINISH,
  LOAD_CACHE_PAGES,
} from './user';

// snackbar
export {
  DISPLAY_SNACKBAR,
} from './mysnackbar';

// **newpage
// toolbar
export {
  // 切换屏幕尺寸
  TOGGLE_PHONE_SIZE,
  // 添加文本
  ADD_TEXT,
  // 发布h5
  PUBLISH_H5,
  DISPLAY_QR_CODE,
  SET_QR_CODE,
  SET_PUBLISH_BTN,
  SAVE_MY_PUBLISH,
  DISPLAY_PUBLISH_SETTINGS,
} from './newpage/toolbar';
// pagelist
export {
  TOGGLE_PAGE,
  DELETE_PAGE,
  ADD_NEW_PAGE,
  UP_MOVE_PAGE,
  DOWN_MOVE_PAGE,
} from './newpage/pagelist';
// tabs
export {
  TOGGLE_TEXT_EDIT_CARD,
  DELETE_TEXT_ITEM,
  TOGGLE_PIC_EDIT_CARD,
  DELETE_PIC_ITEM,
} from './newpage/tabs';
// editcard
export {
  CHANGE_FONT_SIZE,
  CHANGE_FONT_COLOR,
  FONT_BOLD,
  CHANGE_TEXT_CONTENT,
  CHANGE_TEXT_OPACITY,
} from './newpage/editcard';
// mobilewindow
export {
  CHANGE_TEXT_POSITION,
} from './newpage/mobilewindow';
// publishsettings
export {
  CHANGE_PUBLISH_TITLE,
  CHANGE_WECHAT_DESC,
  CHANGE_WECHAT_IMG_URL,
} from './newpage/publishsettings';
// picdialog
export {
  TOGGLE_PIC_DIALOG,
  ADD_PIC_TO_MY_UPLOAD,
  ADD_PIC,

  CHANGE_PIC_SIZE,
  CHANGE_PIC_POSITION,
  CHANGE_PIC_OPACITY,
  CHANGE_PIC_ANGLE,
  CHANGE_PIC_SIZE_TO_POSITION,
} from './newpage/picdialog';

// action creator =========================================================

// **关于 signup
export {
  signupSuccess,
  submitSignup,
  signUpFormInput,
  signupSuccessMessage,
} from './signup';

// **关于 login
export {
  loginSuccess,
  submitLogin,
  loginFormInput,
} from './login';

// **关于 user
export {
  saveUserMes,
  getUserMes,
} from './user';

// snackbar
export {
  displaySnackbar,
} from './mysnackbar';


// **newpage
// toolbar
export {
  togglePhoneSize,
  addText,
  publishH5,
  displayQRcode,
  setQRcode,
  displayPublishSettings,
  saveMyPublish,
  setPublishBtn,
} from './newpage/toolbar';
// pagelist
export {
  togglePage,
  deletePage,
  addNewPage,
  upMovePage,
  downMovePage,
} from './newpage/pagelist';
// tabs
export {
  toggleTextEditCard,
  deleteTextItem,
  togglePicEditCard,
  deletePicItem,
} from './newpage/tabs';
// editcard
export {
  changeFontSize,
  changeFontColor,
  fontBold,
  changeTextContent,
  changeTextOpacity,
} from './newpage/editcard';
// mobilewindow
export {
  changeTextPosition,
} from './newpage/mobilewindow';
// publishsettings
export {
  changePublishTitle,
  changeWechatDesc,
  changeWechatImgUrl,
  uploadWechatImgUrl,
} from './newpage/publishsettings';
// picdialog
export {
  togglePicDialog,
  uploadPic,
  addPicToMyUpload,
  addPic,

  changePicSize,
  changePicPosition,
  changePicOpacity,
  changePicAngle,
  changePicSizeToPosition,
} from './newpage/picdialog';



// 是否正在加载
export function loading(boolean = false) {
  return {
    type: SPIN_LOADING,
    loading: boolean,
  };
}

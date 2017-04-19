
// actions 常量 ============================================================

// circular progress 加载
export const SPIN_LOADING = 'SPIN_LOADING';

// **关于 signUp
export { SIGNUP_SUCCESS, SIGNUP_ERROR_MESSAGE, VALIDATE_SIGNUP_FORM, SIGNUP_FORM_INPUT, SIGNUP_SUCCESS_MESSAGE } from './signup';

// **关于 login
export { LOGIN_SUCCESS, LOGIN_ERROR_MESSAGE, VALIDATE_LOGIN_FORM, LOGIN_FORM_INPUT } from './login';

// **关于 user
export { SAVE_USER_MESSAGE, REQUEST_FINISH } from './user';


// **newpage
// toolbar
export { TOGGLE_PHONE_SIZE, ADD_PIC, ADD_TEXT } from './newpage/toolbar';
// pagelist
export { TOGGLE_PAGE, DELETE_PAGE, ADD_NEW_PAGE, UP_MOVE_PAGE, DOWN_MOVE_PAGE } from './newpage/pagelist';
// tabs
export { TOGGLE_TEXT_EDIT_CARD } from './newpage/tabs';
// editcard
export { CHANGE_FONT_SIZE, CHANGE_FONT_COLOR, FONT_BOLD, CHANG_TEXT_CONTENT } from './newpage/editcard';

// action creator =========================================================

// **关于 signup
export { signupSuccess, submitSignup, signUpFormInput, signupSuccessMessage } from './signup';

// **关于 login
export { loginSuccess, submitLogin, loginFormInput } from './login';

// **关于 user
export { saveUserMes, getUserMes } from './user';

// **newpage
// toolbar
export { togglePhoneSize, addText, addPic } from './newpage/toolbar';
// pagelist
export { togglePage, deletePage, addNewPage, upMovePage, downMovePage } from './newpage/pagelist';
// tabs
export { toggleEditTabs, toggleEditItem, toggleTextEditCard } from './newpage/tabs';
// editcard
export { changeFontSize, changeFontColor, fontBold, changeTextContent } from './newpage/editcard';


// 是否正在加载
export function loading(boolean = false) {
  return {
    type: SPIN_LOADING,
    loading: boolean,
  };
}

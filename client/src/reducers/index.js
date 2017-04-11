
export { validateSignUp, signupErrMessage, signupSuccess, signUpFormInput, signupSuccessMessage } from './signup';

export { loginErrMessage, loginFormInput, loginSuccess, validateLogin } from './login';

export { saveUserMes, requestFinish } from './user';

export { togglePhoneSize, addText, addPic } from './newpage/toolbar';

export { currentPage, deletePage } from './newpage/pagelist';

export { loading } from './loading';


// 打印action type
export function logger(state = '', action) {
  console.log(action.type);
  return state;
}

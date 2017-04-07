import Auth from '../modules/Auth';

// **保存用户信息
export const SAVE_USER_MESSAGE = 'SAVE_USER_MESSAGE';





// 保存用户信息，login是否登录在线
export function saveUserMes(boolean = false, message = {
  name: '',
  email: '',
  avatarUrl: '',
}) {
  return {
    type: SAVE_USER_MESSAGE,
    login: boolean,
    message,
  };
}

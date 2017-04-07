import { SAVE_USER_MESSAGE } from '../actions';


const initialUser = {
  login: false,
  name: '',
  email: '',
  avatarUrl: '',
};
export function saveUserMes(state = initialUser, action) {
  if (action.type === SAVE_USER_MESSAGE) {
    if (action.login) {
      return Object.assign({}, state, action.message);
    }
  }
  return state;
}

import { SAVE_USER_MESSAGE, REQUEST_FINISH } from '../actions';


const initialUser = {
  name: '',
  email: '',
  avatarUrl: '',
};
export function saveUserMes(state = initialUser, action) {
  if (action.type === SAVE_USER_MESSAGE) {
    if (!action.user) return initialUser;
    return Object.assign({}, state, action.user);
  }
  return state;
}

export function requestFinish(state = false, action) {
  if (action.type === REQUEST_FINISH) {
    return action.finish;
  }
  return state;
}

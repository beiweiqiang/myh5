import { SAVE_USER_MESSAGE, REQUEST_FINISH } from '../actions';


const initialUser = {
  name: '',
  email: '',
  password: '',
  avatarUrl: '',
};
export function user(state = initialUser, action) {
  if (action.type === SAVE_USER_MESSAGE) {
    if (!action.user) return initialUser;
    return Object.assign({}, state, action.user);
  }
  return state;
}

export function sendRequest(state = false, action) {
  if (action.type === REQUEST_FINISH) {
    return action.finish;
  }
  return state;
}

// export function user(state = {
//   email: '',
//   name: '',
//   password: '',
//   avatarUrl: '',
// }, action) {
//   if (action.type === SAVE_USER_MESSAGE) {

//   }
//   return state;
// }

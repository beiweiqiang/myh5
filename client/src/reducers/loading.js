import { SPIN_LOADING } from '../actions';

export default function loading(state = false, action) {
  if (action.type === SPIN_LOADING) {
    if (action.loading === true) return true;
    return false;
  }
  return state;
}

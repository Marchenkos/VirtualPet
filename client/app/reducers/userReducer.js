import {
  SAVE_CURRENT_USER,
  REMOVE_CURRENT_USER,
} from '../actions/currentUser.action';

const defaultState = {
  currentUser: null,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    case REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
}

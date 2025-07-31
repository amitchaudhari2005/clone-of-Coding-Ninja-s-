import { SET_USER, CLEAR_USER } from '../types';

const initialState = {
  profile: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        profile: action.payload
      };
    case CLEAR_USER:
      return {
        ...state,
        profile: {}
      };
    default:
      return state;
  }
};

export default userReducer;

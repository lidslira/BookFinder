import {Reducer} from 'redux';
import {UserTypes, UserState} from './types';

const INITIAL_STATE: UserState = {
  isLoggedIn: true,
  username: '',
  password: '',
  fullname: '',
  age: 0,
  gender: '',
  address: {
    city: '',
    state: '',
    country: '',
  },
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case UserTypes.LOGOUT:
      return INITIAL_STATE;

    case UserTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: payload.username,
        password: payload.password,
      };

    case UserTypes.SET_INFORMATION_USER:
      return {
        ...state,
        currentUser: payload.currentUser,
      };

    default:
      return state;
  }
};

export default reducer;

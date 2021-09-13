import {Reducer} from 'redux';
import {UserTypes, UserState} from './types';

const INITIAL_STATE: UserState = {
  isLoggedIn: true,
  currentUser: {
    fullName: '',
    email: '',
    password: '',
    birthDate: '',
    country: '',
    image: '',
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
        currentUser: {
          ...state.currentUser,
          email: payload.email,
          password: payload.password,
        },
      };

    case UserTypes.SET_INFORMATION_USER:
      return {
        ...state,
        currentUser: payload.data,
      };

    default:
      return state;
  }
};

export default reducer;

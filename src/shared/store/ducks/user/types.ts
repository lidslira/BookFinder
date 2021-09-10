import {Action} from 'redux';

export enum UserTypes {
  LOGOUT = 'LOGOUT',
  LOGIN = 'LOGIN',
  SET_INFORMATION_USER = 'SET_INFORMATION_USER',
}

export interface UserState {
  isLoggedIn: boolean;
  username: string;
  password: string;
  fullname: string;
  age: number;
  gender: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
}

export interface LogoutProps extends Action {
  type: UserTypes.LOGOUT;
}

export interface LoginProps extends Action {
  type: UserTypes.LOGIN;
}

export interface SetInformationUserProps extends Action {
  type: UserTypes.SET_INFORMATION_USER;
}

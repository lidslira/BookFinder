import {Action} from 'redux';

export enum UserTypes {
  LOGOUT = 'LOGOUT',
  LOGIN = 'LOGIN',
  SET_INFORMATION_USER = 'SET_INFORMATION_USER',
}
export interface DataFormProps {
  fullName: string;
  email: string;
  country: string;
  birthDate: string;
  image: string;
  password: string;
}

export interface UserState {
  isLoggedIn: boolean;
  currentUser: DataFormProps;
}

export interface LogoutProps extends Action {
  type: UserTypes.LOGOUT;
}

export interface LoginProps extends Action {
  type: UserTypes.LOGIN;
  payload: {email: string; password: string};
}

export interface SetInformationUserProps extends Action {
  type: UserTypes.SET_INFORMATION_USER;
  payload: {data: DataFormProps};
}

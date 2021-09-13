import {action} from 'typesafe-actions';

import {
  UserTypes,
  LoginProps,
  LogoutProps,
  SetInformationUserProps,
  DataFormProps,
} from './types';

export const loginAction = (email: string, password: string): LoginProps =>
  action(UserTypes.LOGIN, {email, password});

export const logoutAction = (): LogoutProps => action(UserTypes.LOGOUT);

export const informationUserAction = (
  data: DataFormProps,
): SetInformationUserProps => action(UserTypes.SET_INFORMATION_USER, {data});

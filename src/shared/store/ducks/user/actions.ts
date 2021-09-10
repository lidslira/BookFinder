import {action} from 'typesafe-actions';

import {
  UserTypes,
  LoginProps,
  LogoutProps,
  SetInformationUserProps,
} from './types';

export const loginAction = (username, password): LoginProps =>
  action(UserTypes.LOGIN);

export const logoutAction = (currentUser): LogoutProps =>
  action(UserTypes.LOGOUT);

export const informationUserAction = (): SetInformationUserProps =>
  action(UserTypes.SET_INFORMATION_USER);

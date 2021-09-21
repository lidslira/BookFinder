/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import styled from 'styled-components/native';
import {Pressable} from 'react-native';
import {s, vs} from 'react-native-size-matters';

import Text from '../Text';
import Icon from '../Icon';

interface StatusProps {
  color: 'FEEDBACK_CORRECT' | 'ERROR' | 'FEEDBACK_WARNING' | 'BUTTON_COLOR';
}

interface ButtonTypesProps {
  success: StatusProps;
  error: StatusProps;
  warning: StatusProps;
  primary: StatusProps;
}

const buttonTypes: ButtonTypesProps = {
  success: {
    color: 'FEEDBACK_CORRECT',
  },
  error: {
    color: 'ERROR',
  },
  warning: {
    color: 'FEEDBACK_WARNING',
  },
  primary: {
    color: 'BUTTON_COLOR',
  },
};
interface ButtonTextProps {
  buttonType?: string;
  status: 'primary' | 'error' | 'success' | 'warning';
}

interface IconProps {
  buttonType?: string;
  status: 'primary' | 'error' | 'success' | 'warning';
}

interface ButtonProps {
  buttonType?: string;
  status: 'primary' | 'error' | 'success' | 'warning';
}

export const Button = styled(Pressable).attrs<ButtonProps>(
  ({buttonType, theme}) => ({
    android_ripple: {
      color:
        buttonType === 'outline'
          ? theme.Colors.BUTTON_COLOR
          : theme.Colors.GRAY_LIGHT,
      borderless: false,
      radius: 18,
    },
  }),
)<ButtonProps>`
  background-color: ${({theme, disabled, buttonType, status}) =>
    disabled
      ? theme.Colors.GRAY_LIGHT
      : buttonType === 'outline'
      ? 'transparent'
      : theme.Colors[buttonTypes[status].color]};
  border-color: ${({theme, status, disabled}) =>
    disabled
      ? theme.Colors.GRAY_LIGHT
      : theme.Colors[buttonTypes[status].color]};
  padding: ${vs(10)}px ${s(20)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
  border-width: 1px;
  margin: 20px;
`;

export const ButtonText = styled(Text).attrs<ButtonTextProps>(({theme}) => ({
  fontSize: theme.Sizes.FONTSIZE_BUTTON_TITLE,
}))<ButtonTextProps>`
  color: ${({theme, buttonType, status}) =>
    buttonType === 'outline'
      ? theme.Colors[buttonTypes[status].color]
      : theme.Colors.BUTTON_TEXT};
  text-align: center;
`;

export const ButtonIcon = styled(Icon).attrs(({theme}) => ({
  size: theme.Sizes.ICON_SIZE_BUTTON,
}))<IconProps>`
  margin-right: 15px;
  color: ${({theme, buttonType, status}) =>
    buttonType === 'outline'
      ? theme.Colors[buttonTypes[status].color]
      : theme.Colors.BLACK};
`;

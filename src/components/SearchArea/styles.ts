import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';

import Icon from '~/shared/components/Icon';

interface TextInputProps {
  customFontSize: number;
}

export const Container = styled.View`
  width: 350px;
`;

export const SearchContainer = styled.View`
  width: 350px;
  height: 55px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  flex-direction: row;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.INPUT};
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const IconArea = styled(Icon)`
  font-size: ${s(20)}px;
  color: ${({theme}) => theme.Colors.ICON_COLOR};
`;
export const SearchArea = styled.TextInput.attrs<TextInputProps>(
  ({customFontSize}) => ({
    fontSize: customFontSize,
  }),
)<TextInputProps>`
  width: 320px;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;

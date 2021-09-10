import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';

import Icon from '~/shared/components/Icon';
import Text from '~/shared/components/Text';

interface TitleScreenProps {
  color: string;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: ${vs(10)}px;
  padding-bottom: ${vs(10)}px;
  background-color: ${(props) => props.theme.Colors.BACKGROUND};
`;

export const TabCustomeComponent = styled.View``;

export const ContainerTab = styled.View`
  flex: 1;
`;

export const IconTab = styled(Icon)`
  font-size: ${s(20)}px;
  padding-bottom: 1px;
`;

export const TitleScreen = styled(Text)<TitleScreenProps>`
  font-size: ${s(13)}px;
  color: black;
`;

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-around;
  align-content: center;
`;

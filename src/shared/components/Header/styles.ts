import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';

import Text from '~/shared/components/Text';

interface IconNavProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.COLOR_APPLICATION};
`;

export const TitlePage = styled(Text).attrs({
  fontSize: 30,
})`
  font-weight: bold;
  color: ${({theme}) => theme.Colors.WHITE};
  margin-bottom: 10px;
  text-align: center;
`;

export const Touchable = styled.TouchableOpacity``;

export const IconContainer = styled.TouchableOpacity`
  margin: 0px 0px 0px 10px;
  position: absolute;
  left: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;
// top right bottom left
export const IconNav = styled(Icon).attrs<IconNavProps>(({name, iconType}) => ({
  name,
  size: 26,
  type: iconType,
}))<IconNavProps>`
  color: white;
`;

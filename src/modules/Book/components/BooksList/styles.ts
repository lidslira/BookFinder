import styled from 'styled-components/native';
import {s} from '~/shared/utils/responsibleText';

import Text from '~/shared/components/Text';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ContainerList = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BookCard = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
  border-radius: 10px;
  text-align: center;
  width: 100%;
  padding: ${s(6)}px;
  margin: 0px 0px 10px 0px;
  border: 1px solid ${({theme}) => theme.Colors.BUTTON_COLOR};
`;

export const TitleText = styled(Text).attrs({
  fontSize: 18,
})`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin: 5px;
`;

export const BookInfoText = styled(Text).attrs({
  fontSize: 16,
})`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin: 5px;
`;

export const BookList = styled.FlatList`
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
`;

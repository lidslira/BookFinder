import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';
import Text from '~/shared/components/Text';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const BookInfoContainer = styled.View``;

export const ContainerImage = styled.View`
  margin-top: 15px;
  width: 100%;
  align-items: center;
`;

export const ContainerDetails = styled.View`
  width: 100%;
  margin-bottom: ${vs(20)}px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const DetailsTitleText = styled(Text).attrs({
  fontSize: s(16),
})`
  font-weight: bold;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;

export const DetailsText = styled(Text).attrs({
  fontSize: 15,
})`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  text-align: center;
`;

export const DescriptionText = styled(Text).attrs({
  fontSize: 15,
})`
  text-align: center;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;

export const BookName = styled(Text).attrs({
  fontSize: 22,
})`
  font-weight: 600;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;

export const ContainerName = styled.View`
  width: 100%;
  margin-bottom: ${vs(10)}px;
  margin-top: ${vs(10)}px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ContainerTitleDetails = styled.View`
  margin-bottom: ${vs(10)}px;
  justify-content: center;
  align-items: center;
`;

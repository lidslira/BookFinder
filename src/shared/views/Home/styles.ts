import styled from 'styled-components/native';
import Text from '~/shared/components/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const BookListContainer = styled.View`
  justify-content: flex-start;
  margin: 20px;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const ImageArea = styled.View``;

export const Image = styled.Image`
  width: 395px;
  height: 240px;
  margin-top: 30px;
`;

export const TextContainer = styled.View`
  margin: 40px 0px 20px 0px;
`;
export const HomeText = styled(Text).attrs({
  fontSize: 20,
})`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;

import styled from 'styled-components/native';
import Text from '~/shared/components/Text';

export const Container = styled.View`
  width: 100%;
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
`;

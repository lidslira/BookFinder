import React, {useContext} from 'react';
import {Image, Linking, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';

import {s} from 'react-native-size-matters';
import {ThemeContext} from 'styled-components';
import {Header} from '~/shared/components/Header';

import * as S from './styles';

const BooksInformation: React.FC = () => {
  const {Colors} = useContext(ThemeContext);

  const navigation = useNavigation();

  const route = useRoute();
  const {book} = route.params;

  const thumbnail = book.volumeInfo.imageLinks;

  let authorDisplay = '';
  if (book.volumeInfo.authors?.length) {
    authorDisplay = book.volumeInfo.authors?.join('; ');
  }

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <Header title="informações" isFocused action={() => handleGoBack()} />
      <S.BookInfoContainer>
        {thumbnail && (
          <S.ContainerImage>
            <Image
              style={{
                width: s(250),
                height: s(350),
                borderRadius: s(20),
                marginBottom: 10,
              }}
              source={{uri: book.volumeInfo.imageLinks.thumbnail}}
            />
          </S.ContainerImage>
        )}

        <S.ContainerName>
          <S.BookName>{book.volumeInfo.title}</S.BookName>
        </S.ContainerName>

        <S.ContainerDetails>
          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Autor(es)</S.DetailsTitleText>
            <S.DetailsText>{authorDisplay || 'Não informado'}</S.DetailsText>
          </S.ContainerTitleDetails>

          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Data de publicação</S.DetailsTitleText>
            <S.DetailsText>
              {book.volumeInfo.publishedDate
                ? book.volumeInfo.publishedDate
                : 'Não innformada'}
            </S.DetailsText>
          </S.ContainerTitleDetails>

          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Mais informações</S.DetailsTitleText>
            <S.DetailsText>
              É este livro que está procurando? {`\n`}
              <Text
                style={{
                  color: Colors.CLICKABLE_TEXT,
                  fontSize: 15,
                  textAlign: 'center',
                }}
                onPress={() => {
                  Linking.openURL(book.volumeInfo.infoLink);
                }}>
                Então, encontre mais informações aqui!
              </Text>
            </S.DetailsText>
          </S.ContainerTitleDetails>
          <S.DetailsTitleText>Descrição</S.DetailsTitleText>
          <S.DescriptionText>
            {book.volumeInfo.description
              ? book.volumeInfo.description
              : 'Não informada'}
          </S.DescriptionText>
        </S.ContainerDetails>
      </S.BookInfoContainer>
    </S.Container>
  );
};

export default BooksInformation;

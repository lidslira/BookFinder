import React from 'react';
import {useSelector} from 'react-redux';
// import {Linking, Text} from 'react-native';

import * as S from './styles';
import {ApplicationState} from '~/shared/store';

const BooksComponent: React.FC = () => {
  const {books, totalBooksFound} = useSelector(
    (state: ApplicationState) => state.books,
  );
  // const totalResults = books.length;

  const renderItem = ({item}: any) => (
    <S.ContainerList>
      <S.BookCard>
        <S.TitleText> {item.volumeInfo.title} </S.TitleText>
        <S.BookInfoText> {item.volumeInfo.authors} </S.BookInfoText>
        <S.BookInfoText> {item.volumeInfo.publishedDate} </S.BookInfoText>
      </S.BookCard>
    </S.ContainerList>
  );

  return (
    <S.Container>
      <S.BookInfoText> TOTAL BOOKS FOUND: {totalBooksFound}</S.BookInfoText>
      <S.BookList
        data={books}
        extraData={books}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};
export default BooksComponent;

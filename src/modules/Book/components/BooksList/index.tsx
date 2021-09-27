import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import {ApplicationState} from '~/shared/store';
import {getBookAction} from '~/shared/store/ducks/books/actions';
import {Book} from '~/dtos';
import {BOOK_INFORMATION} from '~/shared/constants/routes';

interface BooksListProps {
  TextSearch: string;
  getBooks: () => void;
}

const BooksComponent: React.FC<BooksListProps> = ({TextSearch, getBooks}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {books, totalBooksFound, loading} = useSelector(
    (state: ApplicationState) => state.books,
  );

  const goToBooksInformation = (book: Book) => {
    dispatch(getBookAction(book.id));
    navigation.navigate(BOOK_INFORMATION, {book});
  };

  const renderItem = ({item}: any) => (
    <S.ContainerList>
      <S.BookCard onPress={() => goToBooksInformation(item)}>
        <S.TitleText> {item.volumeInfo.title} </S.TitleText>
        <S.BookInfoText>
          {item.volumeInfo.authors?.length
            ? item.volumeInfo.authors.join(';  ')
            : item.volumeInfo.authors}
        </S.BookInfoText>
      </S.BookCard>
    </S.ContainerList>
  );

  return (
    <S.Container>
      <S.TitleText> Foram encontrados {totalBooksFound} livros</S.TitleText>
      <S.BookList
        data={books}
        extraData={[books, TextSearch]}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 100}} />}
        refreshing={loading}
        onRefresh={() => getBooks()}
        onEndReached={() => getBooks()}
        onEndReachedThreshold={0.1}
      />
    </S.Container>
  );
};
export default BooksComponent;

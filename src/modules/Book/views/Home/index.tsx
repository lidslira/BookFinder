import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeContext} from 'styled-components';

import {Header} from '../../../../shared/components/Header';
import Button from '~/shared/components/GlobalButton';
import Input from '~/shared/components/Input';
import BookComponent from '~/modules/Book/components/BooksList';
import Image from '~/assets/images/group-reading.png';

import {
  getBooksListAction,
  cleanBookListAction,
} from '~/shared/store/ducks/books/actions';
import {ApplicationState} from '~/shared/store';

import * as S from './styles';

const Home: React.FC = () => {
  const {loading, books} = useSelector(
    (state: ApplicationState) => state.books,
  );

  const [searchBook, setSearchBook] = useState<string>('');

  const {Colors} = useContext(ThemeContext);
  const dispatch = useDispatch();

  const getBooksList = (index: number) => {
    dispatch(getBooksListAction(searchBook, index));
  };
  const cleanBookList = () => {
    dispatch(cleanBookListAction());
  };

  const showAlertReset = () => {
    Alert.alert(`Atenção`, `Você tem certeza que deseja limpar a lista?`, [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'Sim', onPress: () => cleanBookList()},
    ]);
  };

  return (
    <S.Container>
      <Header title="bookshelf" />
      <S.TextContainer>
        <S.HomeText> Qual o livro que deseja encontrar? </S.HomeText>
      </S.TextContainer>
      <Input
        iconLeft="magnify"
        placeholder="Search"
        placeholderTextColor={Colors.PLACEHOLDER}
        value={searchBook}
        onChangeText={setSearchBook}
        iconRight="autorenew"
        actionIconRight={() => showAlertReset()}
        onSubmitEditing={() => getBooksList(0)}
      />
      {loading ? (
        <S.Indicator size="large" />
      ) : books.length ? null : (
        <Button action={() => getBooksList(0)} title="search" />
      )}
      {books.length ? (
        <BookComponent
          TextSearch={searchBook}
          getBooks={() => getBooksList(books.length)}
        />
      ) : (
        <S.ImageArea>
          <S.Image source={Image} />
        </S.ImageArea>
      )}
    </S.Container>
  );
};

export default Home;

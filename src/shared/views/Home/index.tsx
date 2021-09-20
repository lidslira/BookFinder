import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeContext} from 'styled-components';

import {Header} from '../../components/Header';
import Button from '~/shared/components/GlobalButton';
import {SearchBar} from '../../../components/SearchArea';
import BookComponent from '~/components/BooksList';
import Image from '../../../assets/group-reading.png';

import {getBooksListAction} from '~/shared/store/ducks/books/actions';
import {ApplicationState} from '~/shared/store';

import * as S from './styles';

const Home: React.FC = () => {
  const {loading, books} = useSelector(
    (state: ApplicationState) => state.books,
  );

  const [searchBook, setSearchBook] = useState<String>('');

  const {Colors} = useContext(ThemeContext);
  const dispatch = useDispatch();

  const getBooksList = () => {
    dispatch(getBooksListAction(searchBook));
    Alert.alert('Suas informações foram salvas');
  };

  return (
    <S.Container>
      <Header title="bookshelf" />
      <S.TextContainer>
        <S.HomeText> Qual o livro que deseja encontrar? </S.HomeText>
      </S.TextContainer>
      <SearchBar
        placeholder="Search"
        placeholderTextColor={Colors.PLACEHOLDER}
        value={searchBook}
        onChangeText={setSearchBook}
      />
      {loading ? (
        <S.Indicator size="large" />
      ) : (
        <Button action={getBooksList} title="pesquisar" />
      )}
      {books.length ? (
        <BookComponent />
      ) : (
        <S.ImageArea>
          <S.Image source={Image} />
        </S.ImageArea>
      )}
    </S.Container>
  );
};

export default Home;

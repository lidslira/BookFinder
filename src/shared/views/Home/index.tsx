import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Alert} from 'react-native';
import * as S from './styles';
import {Header} from '../../components/Header';
import Button from '~/shared/components/GlobalButton';
import {SearchBar} from '../../../components/SearchArea';
import Image from '../../../assets/group-reading.png';

const Home: React.FC = () => {
  const {Colors} = useContext(ThemeContext);
  const showAlert = () => {
    Alert.alert(`Searching...`, `Have some patience, darlin'`);
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
      />
      <Button action={showAlert} title="pesquisar" />
      <S.ImageArea>
        <S.Image source={Image} />
      </S.ImageArea>
    </S.Container>
  );
};

export default Home;

import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TextInputProps} from 'react-native';
import {useSelector} from 'react-redux';
import {ApplicationState} from '~/shared/store';

import {Container, SearchContainer, IconArea, SearchArea} from './styles';

export function SearchBar({...rest}: TextInputProps) {
  const {Sizes} = useContext(ThemeContext);

  const fontSize = Sizes.FONTSIZE_INPUT;
  const {delta} = useSelector((state: ApplicationState) => state.font);

  return (
    <Container>
      <SearchContainer>
        <IconArea name="search" type="ionicons" color="black" size={20} />
        <SearchArea {...rest} customFontSize={fontSize + delta} />
      </SearchContainer>
    </Container>
  );
}

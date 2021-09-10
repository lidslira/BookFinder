import React from 'react';

import * as S from './styles';

type Props = {
  title: string;
};

export function Header({title}: Props) {
  return (
    <S.Container>
      <S.TitlePage>{title}</S.TitlePage>
    </S.Container>
  );
}

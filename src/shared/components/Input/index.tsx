import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TextInputProps} from 'react-native';
import {useSelector} from 'react-redux';
import {ApplicationState} from '~/shared/store';

import {sfs} from '~/shared/utils/responsibleText';

import * as S from './styles';

interface InputProps {
  label?: string;
  iconRight?: string;
  iconLeft?: string;
  error?: any;
  labelSameLine?: boolean;
  actionIconRight?: () => void;
}

const Input: React.FC<TextInputProps & InputProps> = ({
  label,
  iconRight,
  iconLeft,
  labelSameLine,
  error,
  actionIconRight,
  ...rest
}) => {
  const {Sizes} = useContext(ThemeContext);
  const fontSize = Sizes.FONTSIZE_INPUT;
  const {delta} = useSelector((state: ApplicationState) => state.font);

  return (
    <S.InputWrapper>
      <S.ContainerInputIcon>
        {iconLeft && <S.IconInput name={iconLeft} />}
        <S.Container labelSameLine={labelSameLine}>
          {label && <S.Label fontSize={sfs(9)}>{label}</S.Label>}
          <S.ContainerInput error={error} labelSameLine={labelSameLine}>
            <S.Input
              {...rest}
              customFontSize={fontSize + delta}
              iconRight={iconRight}
            />
            {iconRight && (
              <S.Touchable onPress={() => actionIconRight && actionIconRight()}>
                <S.RightIconInput name={iconRight} />
              </S.Touchable>
            )}
          </S.ContainerInput>
        </S.Container>
      </S.ContainerInputIcon>
      {error && <S.ErrorMessage fontSize={sfs(12)}>{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};
export default Input;

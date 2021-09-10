import React from 'react';

import * as S from './styles';

interface GlobalButtonProps {
  title: string;
  buttonType?: 'outline';
  iconLeft?: string;
  status?: 'primary' | 'error' | 'success' | 'warning';
  disabled?: boolean;
  action: () => void;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  title,
  status = 'primary',
  buttonType,
  disabled,
  iconLeft,
  action,
}) => (
  <S.Button
    status={status}
    disabled={disabled}
    buttonType={buttonType}
    onPress={() => action()}>
    {iconLeft && (
      <S.ButtonIcon buttonType={buttonType} status={status} name={iconLeft} />
    )}
    <S.ButtonText buttonType={buttonType} status={status}>
      {title}
    </S.ButtonText>
  </S.Button>
);

export default GlobalButton;

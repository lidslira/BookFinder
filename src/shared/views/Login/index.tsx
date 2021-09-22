import React, {useState, useContext} from 'react';
import {useDispatch} from 'react-redux';
import {ThemeContext} from 'styled-components';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/core';
import validationSchema from './validations';

import {loginAction} from '~/shared/store/ducks/user/actions';

import * as S from './styles';
import Button from '~/shared/components/GlobalButton';
import {TABS_SCREEN} from '~/shared/constants/routes';
import Input from '~/shared/components/Input';
import Logo from '~/assets/bookfinder.png';

interface DataFormProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {Colors} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const login = (data: DataFormProps) => {
    console.log(data);
    dispatch(loginAction(data.email, data.password));
    navigation.navigate(TABS_SCREEN);
  };

  const {handleSubmit, dirty, handleChange, values, errors} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: login,
    validateOnChange: false,
  });

  return (
    <S.Container>
      <S.ImageArea source={Logo} />
      <S.LoginArea>
        <S.TextTitle> BOOK FINDER </S.TextTitle>
        <Input
          iconLeft="email"
          placeholder="Email"
          placeholderTextColor={Colors.PLACEHOLDER}
          keyboardType="email-address"
          value={values.email}
          onChangeText={handleChange('email')}
          error={errors.email}
        />
        <Input
          iconLeft="lock"
          placeholder="Password"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.password}
          onChangeText={handleChange('password')}
          secureTextEntry={!showPassword}
          actionIconRight={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
          error={errors.password}
        />
        <Button disabled={!dirty} action={handleSubmit} title="LOGIN" />
      </S.LoginArea>
    </S.Container>
  );
};

export default Login;

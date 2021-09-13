import React, {useState, useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {useFormik} from 'formik';

import {Alert, Modal, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import validationSchema from './validations';

import {
  informationUserAction,
  logoutAction,
} from '~/shared/store/ducks/user/actions';

import Button from '~/shared/components/GlobalButton';
import Input from '~/shared/components/Input';
import ModalCamera from '~/components/ModalCamera';
import {Header} from '../../components/Header';

import * as S from './styles';
import {ApplicationState} from '~/shared/store';
import {DataFormProps} from '~/shared/store/ducks/user/types';

const Profile: React.FC = () => {
  const {Colors} = useContext(ThemeContext);
  const {currentUser} = useSelector((state: ApplicationState) => state.user);

  const dispatch = useDispatch();

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const saveProfile = (data: DataFormProps) => {
    dispatch(
      informationUserAction({
        fullName: data.fullName,
        birthDate: data.birthDate,
        email: data.email,
        password: data.password,
        country: data.country,
        image: data.image,
      }),
    );
    Alert.alert('Suas informações foram salvas');
  };

  const {handleSubmit, dirty, handleChange, values, errors, setFieldValue} =
    useFormik({
      initialValues: {
        fullName: currentUser.fullName,
        birthDate: currentUser.birthDate,
        email: currentUser.email,
        password: currentUser.password,
        country: currentUser.country,
        image: currentUser.image,
      },
      validationSchema,
      onSubmit: saveProfile,
      validateOnChange: false,
    });

  const setNewImage = (path: string) => {
    setFieldValue('image', path);
    setModalIsVisible(false);
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="perfil" />
      <S.ProfileContainer>
        <S.ContainerImage>
          <S.Touchable onPress={() => setModalIsVisible(true)}>
            {values.image ? (
              <S.Image source={{uri: values.image}} />
            ) : (
              <S.IconPerson />
            )}
            <S.ContainerIcon>
              <S.IconEdit />
            </S.ContainerIcon>
          </S.Touchable>
        </S.ContainerImage>
        <Modal
          transparent
          visible={modalIsVisible}
          onRequestClose={() => setModalIsVisible(true)}>
          <ModalCamera
            closeModal={() => setModalIsVisible(false)}
            setNewImage={setNewImage}
          />
        </Modal>
        <Input
          iconLeft="card-account-details-outline"
          placeholder="Enter your name"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.fullName}
          onChangeText={handleChange('fullName')}
          error={errors.fullName}
        />
        <Input
          iconLeft="email"
          placeholder="Enter your email address"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.email}
          onChangeText={handleChange('email')}
          error={errors.email}
        />
        <Input
          iconLeft="calendar"
          placeholder="Enter your birth date"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.birthDate}
          onChangeText={handleChange('birthDate')}
          error={errors.birthDate}
        />
        <Input
          iconLeft="earth"
          placeholder="Enter your country"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.country}
          onChangeText={handleChange('country')}
          error={errors.country}
        />
        <S.ButtonContainer>
          <Button disabled={!dirty} action={handleSubmit} title="SAVE" />
          <Button buttonType="outline" action={() => logout()} title="LOGOUT" />
        </S.ButtonContainer>
      </S.ProfileContainer>
    </S.Container>
  );
};
export default Profile;

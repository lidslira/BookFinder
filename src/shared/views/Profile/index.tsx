import React, {useState, useEffect, useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {useFormik} from 'formik';
import {ScrollView} from 'react-native-gesture-handler';

import {Alert, Modal} from 'react-native';
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

interface DataFormProps {
  fullName: string;
  email: string;
  country: string;
  birthDate: string;
}

const Profile: React.FC = () => {
  const {Colors} = useContext(ThemeContext);

  const dispatch = useDispatch();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [imageProfile, setImageProfile] = useState('');

  const setNewImage = (path: string) => {
    setImageProfile(path);
    setModalIsVisible(false);
  };

  const saveProfile = (data: DataFormProps) => {
    console.log(data);
    Alert.alert('Suas informações foram salvas');
  };

  const {handleSubmit, dirty, handleChange, values, errors} = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      country: '',
      birthDate: '',
    },
    validationSchema,
    onSubmit: saveProfile,
    validateOnChange: false,
  });

  // const {currentUser} = useSelector((state: any) => state.user);

  /* const [fullNameCurrent, setFullNameCurrent] = useState('');
  const [birthDateCurrent, setBirthDateCurrent] = useState('');
  const [cityCurrent, setCityCurrent] = useState('');
  const [stateCurrent, setStateCurrent] = useState('');
  const [countryCurrent, setCountryCurrent] = useState('');

  const setInformationUser = () => {
    setFullNameCurrent(currentUser?.fullName);
    setBirthDateCurrent(currentUser?.birthDate);
    setCountryCurrent(currentUser?.address?.country);
    setStateCurrent(currentUser?.address?.state);
    setCityCurrent(currentUser?.address?.city);
  };
  useEffect(() => {
    if (currentUser) {
      setInformationUser();
    }
  }, [currentUser]);

  const saveProfile = () => {
    dispatch(
      informationUserAction({
        fullName: fullNameCurrent,
        birthDate: birthDateCurrent,
        email: emailCurrent,
        country: countryCurrent,
      }),
    );
    Alert.alert('Suas informações foram salvas');
  };
*/
  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <S.Container>
      <Header title="perfil" />
      <S.ContainerImage>
        <S.Touchable onPress={() => setModalIsVisible(true)}>
          {imageProfile ? (
            <S.Image source={{uri: imageProfile}} />
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
      </S.ButtonContainer>
    </S.Container>
  );
};
export default Profile;

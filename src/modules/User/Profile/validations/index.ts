import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label('Nome completo'),
  email: Yup.string().email('Email inválido').required().label('Email'),
  birthDate: Yup.string().required().label('Data de nascimento'),
  country: Yup.string().label('País'),
  image: Yup.string().label('Image'),
});

export default validationSchema;

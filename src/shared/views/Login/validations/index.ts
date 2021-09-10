import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required().label('Email'),

  password: Yup.string().required().label('Senha'),
});

export default validationSchema;

import  * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    mail: Yup.string()
      .email('Geçerli bir e-posta adresi girin')
      .required('E-posta zorunludur'),
    password: Yup.string()
      .min(6, 'Şifre en az 6 karakter olmalıdır')
      .required('Şifre zorunludur'),
  });
  
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  province: Yup.string().required('İl zorunludur'),
  district: Yup.string().required('İlçe zorunludur'),
  neighborhood: Yup.string().required('Mahalle zorunludur'),
  // street: Yup.string().required('Sokak zorunludur'),
  // avenue: Yup.string().required('Cadde adı zorunludur'),
  // aptName: Yup.string().required('Bina adı zorunludur'),
});

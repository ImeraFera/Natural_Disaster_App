import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  province: Yup.string().required('İl zorunludur'),
  district: Yup.string().required('İlçe zorunludur'),
});

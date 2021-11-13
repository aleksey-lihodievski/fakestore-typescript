import * as yup from 'yup';

export const userLoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).max(15).required(),
});

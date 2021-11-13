import * as yup from 'yup';

export const userRegisterSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).max(15).required(),
  email: yup.string().email('Invalid email').required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  zipcode: yup.string().required(),
  phone: yup.string().required(),
});

import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  category: yup.string().required(),
});

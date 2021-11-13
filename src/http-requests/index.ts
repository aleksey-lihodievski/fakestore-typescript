import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

type SortProps = {
  category: string;
  sort: string;
};

type LoginProps = {
  username: string;
  password: string;
};

type RegisterProps = {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  zipcode: string;
  phone: string;
};

type ProductProps = {
  _id?: number;
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity?: number;
};

type RawProductProps = {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  rating?: { rate: number; count: number };
};

type CartProps = {
  id: number;
  userId: number;
  date: string;
  products: Array<{
    productId: number;
    quantity: number;
  }>;
};

export const getProduct = (id: number | string): Promise<AxiosResponse<RawProductProps>> =>
  instance.get(`/products/${id}`);

export const getAllProducts = (): Promise<AxiosResponse<ProductProps[]>> =>
  instance.get('/products');

export const getAllCategories = (): Promise<AxiosResponse<string[]>> =>
  instance.get('/products/categories');

export const getCart = (cartId: number): Promise<AxiosResponse<CartProps>> =>
  instance.get(`/carts/${cartId}`);

export const getFilteredProducts = ({
  category,
  sort,
}: SortProps): Promise<AxiosResponse<ProductProps[]>> => {
  if (category !== 'all' && category)
    return instance.get(`/products/category/${category}`, {
      params: {
        sort,
      },
    });

  return instance.get(`/products`, {
    params: {
      sort,
    },
  });
};

export const postLogin = ({ username, password }: LoginProps): Promise<AxiosResponse> =>
  instance
    .post(`/auth/login`, {
      username,
      password,
    })

    .then((result) => {
      if (result.data.token) {
        localStorage.setItem('token', JSON.parse(JSON.stringify(result.data?.token)));
      }

      return result.data?.token;
    });

export const postRegister = ({
  email,
  username,
  password,
  firstname,
  lastname,
  city,
  street,
  zipcode,
  phone,
}: RegisterProps): Promise<AxiosResponse> => {
  const id = instance
    .post('/users', {
      email,
      username,
      password,
      name: {
        firstname,
        lastname,
      },
      address: {
        city,
        street,
        number: 3,
        zipcode,
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone,
    })
    .then((json) => json.data.id);
  return id;
};

export const updateProduct = ({
  id,
  title,
  price,
  description,
  image,
  category,
}: ProductProps): Promise<AxiosResponse> =>
  instance.put(`/products/${id}`, {
    title,
    price,
    description,
    image,
    category,
  });

export const deleteProduct = (id: number): Promise<AxiosResponse> =>
  instance.delete(`/products/${id}`, {
    method: 'DELETE',
  });

export const addProduct = ({
  title,
  price,
  description,
  image,
  category,
}: ProductProps): Promise<AxiosResponse> =>
  instance.post(`/products/`, {
    title,
    price,
    description,
    image,
    category,
  });

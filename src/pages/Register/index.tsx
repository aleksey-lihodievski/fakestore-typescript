import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import Container from 'components/Container';
import { postRegister } from 'http-requests';
import AddToCartButton from 'components/AddToCartButton';
import { userRegisterSchema } from 'Validations/UserRegisterValidation';
import { getIsAuthenticated } from 'redux/selectors';
import { toast } from 'react-toastify';
import * as S from './style';

type User = {
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  zipcode: string;
  phone: string;
};

const Register: React.FC = () => {
  const authenticated = useSelector(getIsAuthenticated);

  const { t } = useTranslation(['loginAndRegister']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userRegisterSchema) });

  const history = useHistory();

  if (authenticated) return <Redirect to="/products" />;

  const onSubmit = (data: User): void => {
    postRegister(data)
      .then(() => toast.success(t('YouAreRegistered'), { hideProgressBar: true }))
      .then(() => history.push('/login'))
      .catch((e) => toast.error(e.message, { hideProgressBar: true }));
  };

  return (
    <S.FormWrapper>
      <Container>
        <S.RegisterForm onSubmit={handleSubmit((data: User) => onSubmit(data))}>
          <S.FormHeader>{t('RegisterTitle')}</S.FormHeader>
          <S.FormInput
            type="text"
            id="firstname"
            placeholder={t('Firstname')}
            {...register('firstname', { required: true })}
          />
          <S.FormInput
            type="text"
            id="lastname"
            placeholder={t('Lastname')}
            {...register('lastname', { required: true })}
          />

          <S.FormInput
            type="text"
            id="username"
            placeholder={t('Username')}
            {...register('username', { required: true })}
          />
          <S.FormInput
            type="password"
            id="password"
            placeholder={t('Password')}
            {...register('password', { required: true })}
          />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          <S.FormInput
            // type="email"
            type="text"
            id="email"
            placeholder={t('Email')}
            {...register('email', { required: true })}
          />
          <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
          <S.FormInput
            type="text"
            id="city"
            placeholder={t('City')}
            {...register('city', { required: true })}
          />
          <S.FormInput
            type="text"
            id="street"
            placeholder={t('Street')}
            {...register('street', { required: true })}
          />
          <S.FormInput
            type="text"
            id="phone"
            placeholder={t('PhoneNumber')}
            {...register('phone', { required: true })}
          />

          <S.FormInput
            type="text"
            id="zipcode"
            placeholder={t('Zipcode')}
            {...register('zipcode', { required: true })}
          />
          <S.HaveAnAccount>
            {t('HaveAnAccount')}
            <Link to="/login"> {t('Login')}</Link>
          </S.HaveAnAccount>
          <S.RegisterButtonWrapper>
            <AddToCartButton type="submit">{t('Register')}</AddToCartButton>
          </S.RegisterButtonWrapper>
        </S.RegisterForm>
      </Container>
    </S.FormWrapper>
  );
};

export default Register;

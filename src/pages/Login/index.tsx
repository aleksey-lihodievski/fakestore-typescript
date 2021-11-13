import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import Container from 'components/Container';
import { changeAuth } from 'redux/reducers/authReducer';
import { postLogin } from 'http-requests';
import AddToCartButton from 'components/AddToCartButton';
import { userLoginSchema } from 'Validations/UserLoginValidation';
import { getIsAuthenticated } from 'redux/selectors';
import * as S from './style';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(getIsAuthenticated);

  const { t } = useTranslation(['loginAndRegister']);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  if (authenticated) return <Redirect to="/products" />;

  const onSubmit = ({ username, password }: { username: string; password: string }): void => {
    postLogin({ username, password })
      .then(() => toast.success(t('YouAreLoggedIn'), { hideProgressBar: true }))
      .then((token) => dispatch(changeAuth(token)))
      .then(() => history.push('/products'))
      .catch((e) => toast.error(e.message, { hideProgressBar: true }));
  };

  return (
    <S.FormWrapper>
      <Container>
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <S.FormHeader>{t('LoginTitle')}</S.FormHeader>
          <S.FormInput
            {...register('username')}
            type="text"
            id="username"
            name="username"
            placeholder={t('Username')}
          />
          <S.ErrorMessage>{errors.username?.message}</S.ErrorMessage>
          <S.FormInput
            {...register('password')}
            type="password"
            id="password"
            name="password"
            placeholder={t('Password')}
          />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          <S.HaveAnAccount>
            {t('NoAccount')}
            <Link to="/register"> {t('Register')}</Link>
          </S.HaveAnAccount>
          <S.LoginButtonWrapper>
            <AddToCartButton type="submit">{t('Login')}</AddToCartButton>
          </S.LoginButtonWrapper>
        </S.LoginForm>
      </Container>
    </S.FormWrapper>
  );
};

export default Login;

import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

import AdminRoute from 'components/AdminRoute';
import PrivateRoute from 'components/PrivateRoute';
import ProductPage from 'pages/ProductPage';
import CartPage from 'pages/CartPage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProductsPage from 'pages/ProductsPage';
import AdminProducts from 'pages/AdminProducts';
import { makeAdmin } from 'redux/reducers/authReducer';
import theme from './theme';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  .container {
    position: relative;
    width: 100%;
    max-width: 1170px;
    padding: 0 16px;
    margin: 0 auto;
  }

  a {
    color: #000;
    text-decoration: none;
  }
  `;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  dispatch(makeAdmin());

  // useEffect(() => {
  //   i18n.changeLanguage('en');
  // }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/product/:productId" redirectTo="/login">
              <ProductPage />
            </PrivateRoute>
            <PrivateRoute path="/cart" redirectTo="/login">
              <CartPage />
            </PrivateRoute>
            <PrivateRoute path="/products" redirectTo="/login">
              <ProductsPage />
            </PrivateRoute>

            <AdminRoute path="/admin/products" redirectTo="/products">
              <AdminProducts />
            </AdminRoute>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

            <Route path="/">
              <Redirect from="/" to="/products" />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

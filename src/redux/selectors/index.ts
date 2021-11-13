import { RootState } from 'redux/reducers/rootReducer';

export const getIsAuthenticated = (state: RootState) => state.auth.authenticated;
export const getFetchedCart = (state: RootState) => state.cart.fetchedCart;
export const getAdmin = (state: RootState) => state.auth.admin;
export const getAdminProducts = (state: RootState) => state.adminProducts.adminProducts;

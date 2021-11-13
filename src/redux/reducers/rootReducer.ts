import { combineReducers } from 'redux';
import adminProductsReducer from 'redux/reducers/adminProductsReducer';
import authReducer from 'redux/reducers/authReducer';
import cartReducer from 'redux/reducers/cartReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  adminProducts: adminProductsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

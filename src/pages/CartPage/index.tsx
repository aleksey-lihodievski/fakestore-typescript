import React from 'react';
import { useSelector } from 'react-redux';
import Header from 'components/Header';
import CartItem from 'components/CartItem';
import { getFetchedCart } from 'redux/selectors';
import * as S from './style';

type ProductObject = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity?: number;
  key?: number;
};

const CartPage: React.FC = () => {
  const stateCart = useSelector(getFetchedCart);

  return (
    <>
      <Header />
      <S.CartContainer>
        {stateCart.map((cartItem: ProductObject) => {
          return <CartItem key={cartItem.id} data={cartItem} />;
        })}
      </S.CartContainer>
    </>
  );
};

export default CartPage;

/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { increaseProduct, decreaseProduct } from 'redux/reducers/cartReducer';
import * as M from './style';

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

type Props = { data: ProductObject };

const CartItem: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation(['Main']);

  const { id, title, image, quantity } = data;
  const dispatch = useDispatch();

  const increase = (): void => {
    dispatch(increaseProduct({ id }));
  };

  const decrease = (): void => {
    dispatch(decreaseProduct({ id }));
  };

  return (
    <M.ModalCartItem>
      <M.ModalCartItemImage src={image} alt="cart img" />
      <M.ModalCartItemName>{title}</M.ModalCartItemName>
      <M.ModalCartItemQuantity>
        {quantity}
        {t('Pcs')}
      </M.ModalCartItemQuantity>
      <M.ModalCartItemControls>
        <M.ModalCartItemButton onClick={increase}>+</M.ModalCartItemButton>
        <M.ModalCartItemButton onClick={decrease}>-</M.ModalCartItemButton>
      </M.ModalCartItemControls>
    </M.ModalCartItem>
  );
};

export default CartItem;

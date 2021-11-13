import React, { useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { buyProducts, setFetchedCart } from 'redux/reducers/cartReducer';
import { getAllProducts, getCart } from 'http-requests';
import { getFetchedCart } from 'redux/selectors';
import Button from 'components/Button';
import CartItem from 'components/CartItem';
import Container from 'components/Container';
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

const customStyles: Styles = {
  content: {
    pointerEvents: 'auto',
    top: '65px',
    marginLeft: 'auto',
    width: '600px',
    maxWidth: 'calc(100vw - 80px)',
    overflow: 'unset',
    paddingBottom: '70px',
    height: '60%',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    background: 'transparent',
    // pointerEvents: 'none'
  },
};

Modal.setAppElement('#root');

const Header: React.FC = () => {
  const { t } = useTranslation(['Header']);

  const stateCart = useSelector(getFetchedCart);
  const dispatch = useDispatch();

  const [modalIsOpen, setModalOpen] = useState(false);

  const BuyProducts = (): void => {
    dispatch(buyProducts());
  };

  const fetchCartAndProducts = async (): Promise<any> => {
    const [cart, products] = await Promise.all([getCart(5), getAllProducts()]);

    const data = cart.data.products.map(({ productId, quantity }) => {
      const product = products.data.find(({ id }) => id === productId);
      // тут по хорошему еще делать проверку на то, что такого продукта нет, но в нашем случае можем опустить этот момент
      return { ...product, quantity };
    });

    dispatch(setFetchedCart(data));
  };

  useEffect(() => {
    fetchCartAndProducts();
  }, []);

  return (
    <S.HeaderComponent>
      <Container>
        <Button onClick={() => setModalOpen(true)} id="CartButton">
          {t('Cart')}
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalOpen(false)}
          contentLabel="Modal"
          style={customStyles}
        >
          <S.CartTitle>{t('Cart')}</S.CartTitle>

          <S.CartItemsArea>
            {stateCart.map((cartItem: ProductObject) => (
              <CartItem key={cartItem.id} data={cartItem} />
            ))}
          </S.CartItemsArea>

          <S.BuyProductsWrapper>
            <S.BuyProductsButton onClick={BuyProducts}>{t('Buy')}</S.BuyProductsButton>
          </S.BuyProductsWrapper>

          <S.Links>
            <Link to="/cart"> {t('Cart')}</Link>
            <Link to="/products"> {t('Products')}</Link>
          </S.Links>
        </Modal>
      </Container>
    </S.HeaderComponent>
  );
};

export default Header;

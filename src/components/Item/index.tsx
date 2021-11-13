import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addToCart } from 'redux/reducers/cartReducer';
import AddToCartButton from 'components/AddToCartButton';
import * as S from './style';

type Props = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity?: number;
  key?: number;
};

const Item: React.FC<Props> = ({ id, title, image, price }) => {
  const { t } = useTranslation(['Main']);

  const data = { id, title, image, price };

  const dispatch = useDispatch();

  const AddToCart = (): void => {
    dispatch(addToCart(data));
  };

  return (
    <S.ItemComponent>
      <Link to={`/product/${id}`}>
        <S.Image className="image-holder" src={image} />
      </Link>
      <S.ArticleTitle>
        <Link to={`/product/${id}`}>{title}</Link>
      </S.ArticleTitle>
      <S.ArticlePrice>{`$${price}`}</S.ArticlePrice>
      <S.AddToCartButtonWrapper>
        <AddToCartButton onClick={AddToCart} type="button">
          {t('AddToCart')}
        </AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.ItemComponent>
  );
};

export default Item;

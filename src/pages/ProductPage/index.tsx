import React, { useEffect } from 'react';
import { useAsyncFn } from 'react-use';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { addToCart } from 'redux/reducers/cartReducer';
import Header from 'components/Header';
import AddToCartButton from 'components/AddToCartButton';
import Container from 'components/Container';
import { getProduct } from 'http-requests';
import * as S from './style';

const ProductPage: React.FC = () => {
  const { t } = useTranslation(['Product']);

  const { productId } = useParams() as any;
  const dispatch = useDispatch();

  const [item, fetchItem] = useAsyncFn(async () => {
    try {
      const res = await getProduct(productId);
      return res.data;
    } catch (err) {
      console.log(err);
      return {};
    }
  }, []);

  const handleAddToCart = (): void => {
    dispatch(addToCart(item.value));
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <S.Product>
          <S.ImageContainer>
            {item.value ? <S.Image src={item.value.image} /> : <S.ImagePlaceHolder />}
          </S.ImageContainer>
          <S.Text>
            <S.ProductHeader>{item.value ? item.value.title : 'Title'}</S.ProductHeader>
            <S.ProductParagraph>
              {item.value ? item.value.description : 'Description'}
            </S.ProductParagraph>
            <S.ProductParagraph>${item.value ? item.value.price : '$$$'}</S.ProductParagraph>
            <S.ProductParagraph>{item.value ? item.value.category : 'Category'}</S.ProductParagraph>
            <S.ProductParagraph>
              {`${t('rate')}: ${item.value?.rating?.rate}, ${t('count')}: ${
                item.value?.rating?.count + t('Main:Pcs')
              }`}
            </S.ProductParagraph>
            <S.AddToCartButtonWrapper>
              <AddToCartButton onClick={handleAddToCart}>{t('Main:AddToCart')}</AddToCartButton>
            </S.AddToCartButtonWrapper>
          </S.Text>
        </S.Product>
      </Container>
    </>
  );
};

export default ProductPage;

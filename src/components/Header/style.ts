import styled from 'styled-components';
import AddToCartButton from '../AddToCartButton';

export const HeaderComponent = styled.header`
  padding: 10px;
  background: ${(props) => props.theme.main};
`;

export const CartTitle = styled.h2`
  margin-bottom: 30px;
`;

export const Links = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  right: 20px;
  a {
    margin-right: 20px;
  }
  a:last-child {
    margin-right: 0;
  }
`;

export const BuyProductsButton = styled(AddToCartButton)``;

export const BuyProductsWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const CartItemsArea = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
`;

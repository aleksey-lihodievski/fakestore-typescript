import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  height: 150px;
  max-width: 100%;
  background: #f4f4f4;
  margin: 0 auto;
`;

export const ItemComponent = styled.article`
  width: calc(100% / 3 - 20px);
  position: relative;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  padding: 15px;
  padding-bottom: 50px;
  border-radius: 5px;

  @media (max-width: 992px) {
    width: calc(100% / 2 - 20px);
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const AddToCartButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ArticleTitle = styled.h2`
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 16px;
  color: #000;
`;

export const ArticlePrice = styled.p`
  color: #888;
`;

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  padding: 30px;
  max-height: 80vh;
  border: 1px solid #e5e5e5;
  min-height: calc(90vh - 54px);
  @media (max-width: 839px) {
    flex-wrap: wrap;
    margin-bottom: 30px;
    max-height: unset;
  }
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const ImagePlaceHolder = styled.img`
  width: 100%;
  height: 80%;
  background: #f5f5f5;
`;

export const ImageContainer = styled.div`
  width: 100%;
  @media (max-width: 839px) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: flex-start;
  width: 100%;
  position: relative;
  text-align: right;

  @media (max-width: 839px) {
    text-align: left;
    justify-content: flex-start;
  }
`;

export const ProductHeader = styled.h1`
  font-size: 23px;
  margin-bottom: 10px;
`;

export const ProductParagraph = styled.p`
  font-size: 20px;
  color: #888;
  width: 100%;
  max-width: 60%;
  margin-bottom: 5px;
  @media (max-width: 839px) {
    max-width: 100%;
    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`;

export const AddToCartButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 839px) {
    position: static;
  }
`;

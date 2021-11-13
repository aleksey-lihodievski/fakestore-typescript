import styled from 'styled-components';

export const ModalCartItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #808080;
  margin-bottom: 10px;

  &::last-child {
    margin-bottom: 0;
  }
`;

export const ModalCartItemImage = styled.img`
  height: 50px;
  margin-right: 10px;
`;

export const ModalCartItemName = styled.p`
  max-width: 50%;
`;

export const ModalCartItemControls = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 100%;
  max-height: 100%;
`;

export const ModalCartItemButton = styled.button`
  display: block;
  border: 0;
  border-left: 1px solid #808080;
  border-bottom: 1px solid #808080;
  width: 100%;
  height: 50%;
  background: transparent;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }
`;

export const ModalCartItemQuantity = styled.p`
  flex-grow: 1;
  text-align: right;
  padding-right: 30px;
`;

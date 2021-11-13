import styled from 'styled-components';

const CartButton = styled.button`
  transition: 0.2s all ease;
  border: 1px solid;
  border-radius: 3px;
  color: ${(props) => props.theme.main};
  background: transparent;
  font-size: 20px;
  padding: 7px 20px;
  margin-left: auto;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: #fff;
    background: ${(props) => props.theme.main};
  }
`;

export default CartButton;

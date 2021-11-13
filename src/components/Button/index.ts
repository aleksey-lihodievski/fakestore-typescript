import styled from 'styled-components';

const CartButton = styled.button`
  transition: 0.2s all ease;
  border: 1px solid;
  border-radius: 3px;
  color: #fff;
  background: transparent;
  font-size: 20px;
  display: block;
  padding: 7px 20px;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.main};
    background: #fff;
  }
`;

export default CartButton;

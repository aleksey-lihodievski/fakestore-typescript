import styled from 'styled-components';

export const EditItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #808080;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const EditItemHeader = styled.h2`
  font-size: 30px;
  margin-bottom: 50px;
`;

export const EditItemForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const EditItemField = styled.label`
  margin-bottom: 5px;
`;

export const EditItemValue = styled.input`
  margin-bottom: 10px;
  font-size: 17px;
  border: 0;
  outline: none;
  font-weight: bold;
  display: block;
  width: 100%;

  &:last-of-type {
    margin-bottom: 50px;
  }
`;

export const EditSubmiteButton = styled.button`
  padding: 10px 15px;
  background: ${(props) => props.theme.main};
  border: 0;
  color: #fff;
  cursor: pointer;
`;

export const EditItemImage = styled.img`
  height: 50px;
  margin-right: 10px;
`;

export const EditItemName = styled.p`
  max-width: 40%;
`;

export const EditItemControls = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding-right: 30px;
  right: 0;
  top: 0;
  height: 100%;
  max-height: 100%;
`;

export const EditItemButton = styled.button`
  display: block;
  height: 50%;
  background: transparent;
  cursor: pointer;
  padding: 5px 14px;
  background: #ff0000;
  color: #fff;
  border: 0;

  &:first-of-type {
    margin-right: 10px;
    background: #0000ff;
  }
`;

export const EditItemQuantity = styled.p`
  flex-grow: 1;
  text-align: right;
  padding-right: 30px;
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 15px;
`;

export const EditDeleteHeader = styled.h2`
  margin-bottom: 10px;
`;

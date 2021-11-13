import styled from 'styled-components';

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

export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 15px;
`;

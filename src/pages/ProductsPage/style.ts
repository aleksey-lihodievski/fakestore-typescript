import styled from 'styled-components';
import Container from '../../components/Container';

export const ProductsContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const SelectComponent = styled.select`
  outline: none;
  color: #000;
  width: 100%;
  padding: 5px 10px;
  font-size: 20px;
  border: 2px solid ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};
  border-radius: 0;
  margin-bottom: 15px;
`;

export const ItemsArea = styled.div`
  display: flex;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;
`;

export const SortComponent = styled.select`
  color: #000;
  font-size: 17px;
  margin-bottom: 10px;
  border: 0;
  outline: none;
`;

export const InfoParagraph = styled.p`
  display: block;
  width: 100%;
`;

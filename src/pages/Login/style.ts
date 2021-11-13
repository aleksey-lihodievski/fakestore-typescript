/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FormWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.main},
    ${(props) => props.theme.secondary}
  );
`;

export const LoginForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  width: 100%;
  padding: 30px 20px;
  background: #eee;
  margin: 0 auto;
  border-radius: 5px;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  font-size: 15px;
  padding: 7px 10px;
  outline: none;
  border: 0;
  &::last-child {
    margin-bottom: 15px;
  }
`;

export const FormHeader = styled.h1`
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 15px;
`;

export const HaveAnAccount = styled.div`
  margin-bottom: 20px;
  a {
    color: ${(props) => props.theme.main};
  }
`;

export const LoginButtonWrapper = styled.div`
  width: 100%;
  color: #000;
`;

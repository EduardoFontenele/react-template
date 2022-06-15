import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 2px 3px #0d1f33;
  background-color: #225387;
  max-width: 350px;
  border-radius: 2px;
  padding: 30px;

  h1 {
    margin: 14px 0 14px 0;
    color: #e6e6e6;
  }

  input {
    width: 200px;
    padding: 6px;
    background-color: #0d1f33;
    margin: 6px 0 6px 0;
    border-radius: 5px;
    border: 2px solid #0d1f33;
    color: gray;
  }

  button {
    margin-top: 14px;
    width: 30%;
    height: 30px;
    background-color: #3582d4;
    border-radius: 25px;
    color: #e6e6e6;
    font-weight: 300;
    border: 1px solid #3582d4;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: #0d1f33;
      transition: all 0.3s ease-out;
      border: 1px solid #0d1f33;
    }
  }

  label {
    font-size: 12px;
    color: white;
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

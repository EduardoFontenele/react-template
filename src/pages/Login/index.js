/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { LoginForm, LoginDiv } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clickButtonRequest());
  }

  return (
    <LoginDiv>
      <LoginForm id="loginForm">
        <h1>Login</h1>
        <label>Usuário</label>
        <input type="text" />
        <label>Senha</label>
        <input type="password" name="" id="" />
        <button type="submit" onClick={handleClick}>
          Entrar
        </button>
      </LoginForm>
    </LoginDiv>
  );
}

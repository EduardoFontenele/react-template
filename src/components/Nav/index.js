import React from 'react';
import { FaHome, FaPhone, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { NavBar } from './styled';

export default function Nav() {
  const buttonIsClicked = useSelector((state) => state.loginReducer.logged);

  return (
    <NavBar>
      <a href="/">
        <FaHome />
      </a>
      <a href="/">
        <FaPhone />
      </a>
      <a href="/login">
        <FaUser />
      </a>
      <p className="text-white">
        {buttonIsClicked ? 'Bem-vindo de volta' : 'Faça login para continuar'}
      </p>
    </NavBar>
  );
}

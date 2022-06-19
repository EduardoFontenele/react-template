import React from 'react';
import { FaHome, FaPhone, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { NavBar } from './styled';

export default function Nav() {
  const botaoClicado = useSelector((state) => state.exampleReducer.botaoClicado);

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
      <p>{botaoClicado ? 'User is logged' : 'User is off'}</p>
    </NavBar>
  );
}

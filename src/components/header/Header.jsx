import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import HEADERLOGO from '/src/components/header/img/Control.png';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={HEADERLOGO} alt="Control" />
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/">
        <h1>GameClips</h1>
      </Link>
    </header>
  );
}

export default Header;

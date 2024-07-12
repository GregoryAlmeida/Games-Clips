import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="./src/components/header/img/Control.png" alt="Control" />
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/">
        <h1>GameClips</h1>
      </Link>
    </header>
  );
}

export default Header;

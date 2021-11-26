import React from 'react';
import {
  Link,
} from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => (
  <header>
    <ul className="nav-list">
      <li className="nav-item"><Link to="/" className="logo"><img src={logo} alt={logo} /></Link></li>
      <li className="nav-item"><Link to="/search">Search</Link></li>
      <li className="nav-item"><Link to="/#how-it-works">How it works</Link></li>
      <li className="nav-item"><Link to="/#about">About</Link></li>
    </ul>
  </header>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/">
        <img src={logo} alt={logo} />
      </Link>
    </div>
    <ul className="nav-list">
      <li className="nav-list__item">
        <Link to="/search/javascript">Search</Link>
      </li>
      <li className="nav-list__item">
        <Link to="/#how-it-works">How it works</Link>
      </li>
      <li className="nav-list__item">
        <Link to="/#about">About</Link>
      </li>
    </ul>
  </header>
);

export default Header;

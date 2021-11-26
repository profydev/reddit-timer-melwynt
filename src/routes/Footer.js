import React from 'react';
import {
  Link,
} from 'react-router-dom';
import logo from '../sign.svg';

const Footer = () => (
  <footer>
    <ul className="footer-list">
      <li className="footer-item"><a href="https://profy.dev/employers">profy.dev</a></li>
      <li className="footer-item"><Link to="/" className="logo"><img src={logo} alt={logo} /></Link></li>
      <li className="footer-item"><Link to="/terms">Terms & Privacy</Link></li>
    </ul>
  </footer>
);

export default Footer;

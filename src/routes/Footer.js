import React from 'react';
import { Link } from 'react-router-dom';
import sign from '../sign.svg';

const Footer = () => (
  <footer>
    <div className="company">
      <a href="https://profy.dev/employers">profy.dev</a>
    </div>
    <div className="sign">
      <Link to="/">
        <img src={sign} alt="" />
      </Link>
    </div>
    <div className="terms">
      <Link to="/terms">Terms &amp; Privacy</Link>
    </div>
  </footer>
);

export default Footer;

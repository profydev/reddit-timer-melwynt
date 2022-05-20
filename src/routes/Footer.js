import React from 'react';
import { Link } from 'react-router-dom';
import sign from '../sign.svg';

const Footer = () => (
  <footer>
    <div className="company">
      <a href="https://ooloo.io/employers">profy.dev</a>
    </div>
    <div className="sign">
      <Link to="/">
        <img src={sign} alt={sign} />
      </Link>
    </div>
    <div className="terms">
      <Link to="/terms">Terms & Privacy</Link>
    </div>
  </footer>
);

export default Footer;

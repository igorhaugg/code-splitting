import React from 'react';
import { Link } from 'react-router-dom';

import FacebookLogo from './images/facebook.png';
import InstagramLogo from './images/instagram.png';
import TwitterLogo from './images/twitter.png';
import CodepenLogo from './images/codepen.png';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="/">Logo</Link>
        </div>
        <ul className="header__items">
          <li className="header__item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="header__item">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="header__icons">
          <a href="http://www.facebook.com/" className="header__icon">
            <img src={FacebookLogo} alt="Facebook logo" />
          </a>
          <a href="https://www.instagram.com/" className="header__icon">
            <img src={InstagramLogo} alt="Instagram logo" />
          </a>
          <a href="https://twitter.com/" className="header__icon">
            <img src={TwitterLogo} alt="Twitter logo" />
          </a>
          <a href="https://codepen.io" className="header__icon">
            <img src={CodepenLogo} alt="Codepen logo" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

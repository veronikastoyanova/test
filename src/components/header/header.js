import React from 'react';
import { Link } from 'gatsby';

import logo from '../../assets/logomark-full.svg';
import './header.scss';

export default () => (
  <header className="header">
    <Link className="navLink" to="/">
      <img className="logo" src={logo} alt="ship cars" />
    </Link>
    <span className="navbarMenu">
      <Link className="navLink" to="/website">Products</Link>
      <Link className="navLink" to="/website">Use Cases</Link>
      <Link className="navLink" to="/website">Company</Link>
      <Link className="navLink" to="/blog">Resources</Link>
    </span>
    <span>
      <Link className="navLink" to="">Login</Link>
      <button className="signUpButton">Sign Up</button>
    </span>
  </header>
);

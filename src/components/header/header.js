import React from 'react';
import { Link } from 'gatsby';

import logo from '../../assets/logomark-full.svg';
import './header.scss';

export default () => (
  <header className="header">
    <Link className="nav-link" to="/">
      <img className="logo" src={logo} alt="ship cars" />
    </Link>
    <span className="navbar-menu">
      <Link className="nav-link" to="/website">Products</Link>
      <Link className="nav-link" to="/website">Use Cases</Link>
      <Link className="nav-link" to="/website">Company</Link>
      <Link className="nav-link" to="/blog">Resources</Link>
    </span>
    <span>
      <Link className="nav-link" to="">Log In</Link>
      <button className="sign-up-button">Sign Up</button>
    </span>
  </header>
);

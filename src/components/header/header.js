import React from 'react';
import { Link } from 'gatsby';

import logo from '../../assets/logomark-full.svg';
import classes from './header.module.scss';

export default () => (
  <header className={classes.header}>
    <Link className={classes.navLink} to="/">
      <img className={classes.logo} src={logo} alt="ship cars" />
    </Link>
    <span className={classes.navbarMenu}>
      <Link className={classes.navLink} to="/website">Products</Link>
      <Link className={classes.navLink} to="/website">Use Cases</Link>
      <Link className={classes.navLink} to="/website">Company</Link>
      <Link className={classes.navLink} to="/blog">Resources</Link>
    </span>
    <span>
      <Link className={classes.navLink} to="">Login</Link>
      <button className={classes.signUpButton}>Sign Up</button>
    </span>
  </header>
);

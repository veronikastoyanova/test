import React from 'react';
import { Link } from 'gatsby';

import logo from '../../assets/logomark-full.svg';
import './header.scss';
import DropDown from '../drop-down-menu/dropDown';

export default () => (
  <header className="header">
    <Link className="nav-item" to="/">
      <img className="logo" src={logo} alt="ship cars" />
    </Link>
    <span className="navbar-menu">
      <DropDown name="Product" item="productMenu" />
      <DropDown name="Use Case" item="useCaseMenu" />
      <DropDown name="Company" item="companyMenu" />
      <a className="nav-item" href="https://help.ship.cars/">Knowledge base</a>
    </span>
    <span>
      <a className="nav-item" href="https://ship.cars/login">Log In</a>
      <button className="sign-up-button">Sign Up</button>
    </span>
  </header>
);

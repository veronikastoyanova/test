import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/logo-white.png';
import classes from './footer.module.scss';

export default () => (
  <footer className={classes.Footer}>
    <div className={classes.Connect}>
      <img className={classes.Logo} src={logo} alt="ship cars" />
      <p className={classes.Address}>
        Ship.Cars USA, LLC <br />
        1234 Street Address <br />
        Suite 1300 <br />
        Chicago, IL 12345
      </p>
      <p className={classes.Contacts}>
        (844) 522-7744 <br />
        support@ship.cars
      </p>
    </div>
    <div className={classes.FooterLinks}>
      <div className={classes.LinkCategories}>
        <h3 className={classes.CategoriesTitle}>Products</h3>
        <Link to="/">Carrier</Link>
        <Link to="/">Market</Link>
        <Link to="/">Driver</Link>
        <Link to="/">Shipper</Link>
      </div>
      <div className={classes.LinkCategories}>
        <h3 className={classes.CategoriesTitle}>Use Cases</h3>
        <Link to="/">for Shippers</Link>
        <Link to="/">for Carriers</Link>
        <Link to="/">for Drivers</Link>
      </div>
      <div className={classes.LinkCategories}>
        <h3 className={classes.CategoriesTitle}>Company</h3>
        <Link to="/">About Ship.Cars</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Carriers</Link>
        <Link to="/">News</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Sign Up</Link>
        <Link to="/">Instant Demo</Link>
      </div>
      <div className={classes.LinkCategories}>
        <h3 className={classes.CategoriesTitle}>Resources</h3>
        <Link to="/">All Resources</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Webinars</Link>
        <Link to="/">Support</Link>
        <Link to="/">Knowledge Base</Link>
        <Link to="/">Glossary</Link>
        <Link to="/">Status</Link>
      </div>
    </div>
    <p className={classes.Rights}>Copyright 2019. Privacy Policy</p>
  </footer >
);
import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/logo-white.png';
import classes from './footer.module.scss';

export default () => (
  <footer className={classes.footer}>
    <div className={classes.connect}>
      <img className={classes.logo} src={logo} alt="ship cars" />
      <p className={classes.address}>
        Ship.Cars USA, LLC <br />
        1234 Street Address <br />
        Suite 1300 <br />
        Chicago, IL 12345
      </p>
      <p className={classes.contacts}>
        (844) 522-7744 <br />
        support@ship.cars
      </p>
    </div>
    <div className={classes.footerLinks}>
      <div className={classes.linkCategories}>
        <h3 className={classes.categoriesTitle}>Products</h3>
        <Link to="/">Carrier</Link>
        <Link to="/">Market</Link>
        <Link to="/">Driver</Link>
        <Link to="/">Shipper</Link>
      </div>
      <div className={classes.linkCategories}>
        <h3 className={classes.categoriesTitle}>Use Cases</h3>
        <Link to="/">for Shippers</Link>
        <Link to="/">for Carriers</Link>
        <Link to="/">for Drivers</Link>
      </div>
      <div className={classes.linkCategories}>
        <h3 className={classes.categoriesTitle}>Company</h3>
        <Link to="/">About Ship.Cars</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Carriers</Link>
        <Link to="/">News</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Sign Up</Link>
        <Link to="/">Instant Demo</Link>
      </div>
      <div className={classes.linkCategories}>
        <h3 className={classes.categoriesTitle}>Resources</h3>
        <Link to="/">All Resources</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Webinars</Link>
        <Link to="/">Support</Link>
        <Link to="/">Knowledge Base</Link>
        <Link to="/">Glossary</Link>
        <Link to="/">Status</Link>
      </div>
    </div>
    <p className={classes.rights}>Copyright 2019. All Rights Reserved.</p>
  </footer >
);

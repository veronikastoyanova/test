import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/logo-white.png';

import './footer.scss';

export default () => (
  <footer className="footer">
    <div className="connect">
      <img className="logo" src={logo} alt="ship cars" />
      <p className="address">
        Ship.Cars USA, LLC <br />
        1234 Street Address <br />
        Suite 1300 <br />
        Chicago, IL 12345
      </p>
      <p className="contacts">
        (844) 522-7744 <br />
        support@ship.cars
      </p>
    </div>
    <div className="footerLinks">
      <div className="linkCategories">
        <h3 className="categoriesTitle">Products</h3>
        <Link to="/">Carrier</Link>
        <Link to="/">Market</Link>
        <Link to="/">Driver</Link>
        <Link to="/">Shipper</Link>
      </div>
      <div className="linkCategories">
        <h3 className="categoriesTitle">Use Cases</h3>
        <Link to="/">for Shippers &#38; Brokers</Link>
        <Link to="/">for Carriers &#38; Drivers</Link>
      </div>
      <div className="linkCategories">
        <h3 className="categoriesTitle">Company</h3>
        <Link to="/">About Ship.Cars</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Carriers</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Sign Up</Link>
        <Link to="/">Privacy Policy</Link>
      </div>
      <div className="linkCategories">
        <h3 className="categoriesTitle">Resources</h3>
        <Link to="/">Help Center</Link>
        <Link to="/">Get Started</Link>
        <Link to="/">Importing orders</Link>
        <Link to="/">FAQs</Link>
        <Link to="/">Status Page</Link>
      </div>
    </div>
    <p className="rights">Copyright 2019. All Rights Reserved.</p>
  </footer >
);

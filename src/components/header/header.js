import React from 'react';
import { Link } from 'gatsby';

import logo from '../../assets/logos/logo-shipcars.svg';
import DropDown from '../drop-down-menu/drop-down';

const headerCongif = [
  {
    title: 'Product',
    menu: [
      { title: 'Calcatron', icon: 'calcatron', to: '/', description: 'Predictive Rate Engine.' },
      { title: 'Market Loadboard', icon: 'market', to: '/', description: 'Loadboard' },
      { title: 'Carrier TMS', icon: 'carrier', to: '/', description: 'TMS' },
      { title: 'Shipper TMS', icon: 'shipper', to: '/', description: 'TMS' },
      { title: 'Driver ePOD', icon: 'driver', to: '/', description: 'ePOD' }
    ]
  },
  {
    title: 'Use case',
    menu: [
      { title: 'Brokers & Shippers', icon: '', to: '/', description: 'lorem' },
      { title: 'Carriers & Drivers', icon: '', to: '/', description: 'lorem' }
    ]
  },
  {
    title: 'Company',
    menu: [
      { title: 'About', icon: 'about', to: '/', description: 'lorem' },
      { title: 'Prices', icon: 'prices', to: '/', description: 'lorem' },
      { title: 'Careers', icon: 'careers', to: '/', description: 'lorem' },
      { title: 'Contact', icon: 'contact', to: '/', description: 'lorem' }
    ]
  }
];

const isMobile = () => {
  return window.innerWidth <= 800 || 'ontouchstart' in document.documentElement;
};

export default (props) => (
  <header className={`header ${props.fixHeader ? 'fixed' : ''}`}>
    <Link className="nav-item" to="/">
      <img className="logo" src={logo} alt="ship cars" />
    </Link>
    <div className="navbar-menu">
      {headerCongif.map((item, index) => <DropDown item={item} key={index} />)}
      <a className="nav-item" href="https://help.ship.cars/">Knowledge base</a>
    </div>
    <div className="buttons-container">
      <div className="cover"></div>
      <button
        id="Instant demo-Desktop-Header"
        className={`button outlined fixed-possition ${props.fixHeader ? 'appear' : 'hidden'}`}
      >
        Watch An Instant Demo
      </button>
      <a className="nav-item" href="https://ship.cars/login">
        <button
          id={isMobile() ? 'GetStarted-Mobile-Header' : 'GetStarted-Desktop-Header'}
          className={
            `button front 
            ${props.fixHeader ? 'filled' : 'outlined'}
            ${props.fixHeader
              ? isMobile() ? 'mobile-tg-pcta-header' : 'desktop-tg-pcta-header'
              : isMobile() ? 'mobile-tg-scta-header' : 'desktop-tg-scta-header'}
            ${isMobile() ? 'mobile-tg-pcta-header' : 'desktop-tg-pcta-header'}`
          }
        >
          {props.fixHeader ? 'Get Started' : 'Log In'}
        </button>
      </a>
    </div>
  </header>
);

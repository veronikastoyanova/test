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

const isDesktop = true;

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
          id={isDesktop ? 'GetStarted-Desktop-Header' : 'GetStarted-Mobile-Header'}
          className={
            `button front 
            ${props.fixHeader ? 'filled' : 'outlined'}
            ${props.fixHeader
              ? isDesktop ? 'desktop-tg-pcta-header' : 'mobile-tg-pcta-header'
              : isDesktop ? 'desktop-tg-scta-header' : 'mobile-tg-scta-header'}
            ${isDesktop ? 'desktop-tg-pcta-header' : 'mobile-tg-pcta-header'}`
          }
        >
          {props.fixHeader ? 'Get Started' : 'Log In'}
        </button>
      </a>
    </div>
  </header>
);

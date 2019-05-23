/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import Footer from '../footer/footer';

import './layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1440px',
          padding: '100px 40px 40px',
          backgroundColor: 'white'
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

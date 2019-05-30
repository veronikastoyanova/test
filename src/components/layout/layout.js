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

import '../../styles/layout.scss';

class Layout extends React.Component {
  state = {
    scrolling: false
  }

  handleScroll = (event) => {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <Header fixHeader={this.state.scrolling} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: '1440px',
            padding: '100px 40px 40px'
          }}
        >
          <main>{this.props.children}</main>
        </div>
        <Footer />
      </div >
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

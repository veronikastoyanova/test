import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Articles from '../components/home/home-articles';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Home page description"
    />
    <Articles />
  </Layout>
);

export default IndexPage;

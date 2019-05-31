import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Articles from '../components/home/home-articles';
import GrowingNum from '../components/growing-number/growing-number';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Home page description"
    />
    <Articles />
    <div className="statistics" >
      <GrowingNum number="8" unit="k" description="Carriers in our Network" />
      <GrowingNum number="17" unit="k" description="Loads Dispatched Per Month" />
      <GrowingNum number="200" unit="%" description="More Efficient Than the Next Leading TMS Software" />
      <GrowingNum number="30" unit="%" description="Loads Ordered From Our Loadboard" />
    </div>
  </Layout>
);

export default IndexPage;

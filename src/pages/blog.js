import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';

const Blog = ({ data }) => (
  <Layout>
    <div>
      <h1>Amazing Pandas Eating Things</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={node.frontmatter.path}>{node.frontmatter.title} <span>— {node.frontmatter.date}</span></Link>
          </h3>
        </div>
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default Blog;

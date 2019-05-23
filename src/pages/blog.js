import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import BlogCard from '../components/Blog/blog-card';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <h1>Blog</h1>
      {posts.map(({ node }) => <BlogCard key={node.fields.slug} node={node}></BlogCard>)}
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            shortDescription
            audience
          }
        }
      }
    }
  }
`;

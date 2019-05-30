import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import BlogCard from '../components/blog/blog-card';
import SEO from '../components/seo';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
       <SEO
        title="Blog"
        description="description for the blog"
      />
      <div className="blog-page">
        {posts.map(({ node }) => <BlogCard key={node.fields.slug} node={node}></BlogCard>)}
      </div>
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
            thumbnail
          }
        }
      }
    }
  }
`;

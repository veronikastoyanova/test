import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import classes from './blog.module.scss';

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1 className={classes.blogTitle}>{post.frontmatter.title}</h1>
      <p className={classes.blogDate}>{post.frontmatter.date}</p>
      <div className={classes.blogContent} dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <ul className={classes.prevNextArrow}>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        shortDescription
        audience
      }
    }
  }
`;

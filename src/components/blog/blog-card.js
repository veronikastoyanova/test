import React from 'react';
import { Link } from 'gatsby';

import classes from './blog-card.module.scss';
import defaultImg from '../../assets/cars.jpg';

export default ({ node }) => {
  return (
    <div className={classes.blogCard}>
      <img
        className={classes.blogImg}
        src={node.frontmatter.thumbnail || defaultImg}
        alt="blog"
      />
      <div className={classes.infoBox}>
        <p className={classes.type} />
        <h2 className={classes.blogTitle}>
          {node.frontmatter.title || node.fields.slug}
        </h2>
        <p className={classes.blogContent}>
          {node.frontmatter.shortDescription}
        </p>
        <Link className={classes.blogLink} to={node.fields.slug}>
          Read Now
          <span className={classes.arrow}> ➔</span>
        </Link>
      </div>
    </div>
  );
};

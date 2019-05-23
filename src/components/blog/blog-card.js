import React from 'react';
import { Link } from 'gatsby';

import classes from './blog-card.module.scss';

export default ({ node }) => {
  return (
    <div className={classes.BlogCard}>
      <img
        className={classes.BlogImg}
        src="https://source.unsplash.com/random/400x200"
        alt="blog"
      />
      <div className={classes.InfoBox}>
        <p className={classes.Type} />
        <h2 className={classes.BlogTitle}>
          {node.frontmatter.title || node.fields.slug}
        </h2>
        <p className={classes.BlogContent}>
          {node.frontmatter.shortDescription}
        </p>
        <Link className={classes.BlogLink} to={node.fields.slug}>
          Read Now
          <span className={classes.Arrow}> ➔</span>
        </Link>
      </div>
    </div>
  );
};

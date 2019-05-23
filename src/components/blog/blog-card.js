import React from 'react';
import { Link } from 'gatsby';

import classes from './blog-card.module.scss';

export default ({ node }) => {
  console.log(node);
  
  return (
    <div className={classes.BlogCard}>
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

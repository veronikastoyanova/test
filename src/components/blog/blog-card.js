import React from 'react';
import { Link } from 'gatsby';

import defaultImg from '../../assets/cars.jpg';

export default ({ node }) => {
  return (
    <div className="blog-card">
      <img
        className="blog-img"
        src={node.frontmatter.thumbnail || defaultImg}
        alt="blog"
      />
      <div className="info-box">
        <p className="type" />
        <h2 className="blog-title">
          {node.frontmatter.title || node.fields.slug}
        </h2>
        <p className="blog-content">
          {node.frontmatter.shortDescription}
        </p>
        <Link className="blog-link" to={node.fields.slug}>
          Read Now
          <span className="arrow"> ➔</span>
        </Link>
      </div>
    </div>
  );
};

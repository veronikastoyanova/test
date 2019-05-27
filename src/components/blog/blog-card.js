import React from 'react';
import { Link } from 'gatsby';

import './blog-card.scss';
import defaultImg from '../../assets/cars.jpg';

export default ({ node }) => {
  return (
    <div className="blogCard">
      <img
        className="blogImg"
        src={node.frontmatter.thumbnail || defaultImg}
        alt="blog"
      />
      <div className="infoBox">
        <p className="type" />
        <h2 className="blogTitle">
          {node.frontmatter.title || node.fields.slug}
        </h2>
        <p className="blogContent">
          {node.frontmatter.shortDescription}
        </p>
        <Link className="blogLink" to={node.fields.slug}>
          Read Now
          <span className="arrow"> ➔</span>
        </Link>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'gatsby';

export default (props) => {
  return (
    <div className="dropdown">
      <span className="nav-item">{props.item.title}</span>
      <div className="dropdown-content">
        <div className="triangle-with-shadow"></div>
        <div className="content">
          {props.item.menu.map((link, index) => {
            const iconClasses = ['img-wrapper'];
            iconClasses.push(link.icon);
            return (
              <Link className="content-wrapper" to={link.to} key={index}>
                <div className={iconClasses.join(' ')}></div>
                <div className="link-info">
                  <span className="link-title">{link.title}</span>
                  <span className="link-description">{link.description}</span>
                  <span className="learn-more">Learn more ➔</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

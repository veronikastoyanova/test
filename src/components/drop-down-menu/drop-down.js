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
                  <p className="link-title">{link.title}</p>
                  <p className="link-description">{link.description}</p>
                  <p className="learn-more">Learn more ➔</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

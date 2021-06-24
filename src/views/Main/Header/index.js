import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';
import './style.scss';

const Header = () => {
  return (
    <div id="header" justify="space-between">
      <div className="title">
        <span>Flight Info</span>
      </div>
      <div className="menu">
        {Object.values(routes).map(({ path, title }) => {
          return (
            <Link key={path} className="menu-item" to={path}>
              {title}
            </Link>
          );
        })}
        {/* <Link className="menu-item">Home</Link> */}
        {/* <div className="menu-item">Content</div> */}
      </div>
    </div>
  );
};

export default Header;

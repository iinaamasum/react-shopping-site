import React from 'react';
import logo from '../../images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav__bar">
        <a className="left__padding" href="/">
          <img src={logo} alt="" srcset="" />
        </a>
        <div className="link">
          <ul>
            <li>
              <a href="/" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="/order" rel="noopener noreferrer">
                Order
              </a>
            </li>
            <li>
              <a href="/review" rel="noopener noreferrer">
                Order Review
              </a>
            </li>
            <li>
              <a href="/inventory" rel="noopener noreferrer">
                Manage Inventory
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

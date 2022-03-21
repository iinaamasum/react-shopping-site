import React from 'react';
import logo from '../../images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav__bar">
        <a href="/">
          <img src={logo} alt="" srcset="" />
        </a>
        <div className="link">
          <ul>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="/order" target="_blank" rel="noopener noreferrer">
                Order
              </a>
            </li>
            <li>
              <a href="/review" target="_blank" rel="noopener noreferrer">
                Order Review
              </a>
            </li>
            <li>
              <a href="/inventory" target="_blank" rel="noopener noreferrer">
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

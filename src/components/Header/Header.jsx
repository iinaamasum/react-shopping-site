import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import headerImg from '../../images/header.svg';
import './Header.css';

const Header = () => {
  return (
    <section>
      <div className="left__text">
        <p className="price__off">Sale up to 70% off</p>
        <h1 className="heading">New Collection For Fall</h1>
        <p className="heading__des">
          Discover all the new arrivals of ready-to-wear collection.
        </p>
        <a className="left__padding" href="/order">
          <button className="shop__now">
            Shop Now
            <FontAwesomeIcon className="font__awesome" icon={faArrowRight} />
          </button>
        </a>
      </div>
      <div className="right__img">
        <img src={headerImg} alt="" srcset="" />
      </div>
    </section>
  );
};

export default Header;

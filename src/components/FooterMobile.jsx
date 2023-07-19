import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-mobile fixed-bottom bg-primary">
        <div className="d-flex">
      <div className="search">
        <FaSearch className="icon" />
      </div>
      <div className="profile">
        <FaUser className="icon" />
      </div>
      </div>
    </footer>
  );
};

export default Footer;

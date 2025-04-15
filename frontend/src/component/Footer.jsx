import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
      Developved by Bipul &copy; {new Date().getFullYear()} AI Code Reviewer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

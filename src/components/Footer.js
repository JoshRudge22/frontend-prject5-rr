import React from 'react';
import fontAwesomeStyles from '../styles/FontAwesome.module.css';

const Footer = () => {
  return (
    <div className={fontAwesomeStyles.footer}>
      <div className={fontAwesomeStyles.socialMedia}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={fontAwesomeStyles.icon}>
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={fontAwesomeStyles.icon}>
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={fontAwesomeStyles.icon}>
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={fontAwesomeStyles.icon}>
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={fontAwesomeStyles.icon}>
          <i className="fa fa-youtube"></i>
        </a>
      </div>
      <p className={fontAwesomeStyles.copyright}>
        &copy; 2025 Rudgeys Recruitment. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
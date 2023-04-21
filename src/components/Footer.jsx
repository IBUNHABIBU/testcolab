import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <a href="https://github.com/IBUNHABIBU" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://twitter.com/ibunhabibu" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
      <a href="https://linkedin.com/in/salum-habibu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
    </div>
    <div className="footer__contact">
      <span>Phone: +255-752-443624</span>
    </div>
  </footer>
);

export default Footer;

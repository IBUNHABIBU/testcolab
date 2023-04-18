import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
      <div className="footer__social">
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
      </div>
      <div className="footer__contact">
        <span>Phone: 555-555-5555</span>
      </div>
    </footer>
);

export default Footer;

import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Travel Unbounded. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com/">Facebook</a>
          <a href="https://instagram.com/">Instagram</a>
          <a href="https://twitter.com/">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

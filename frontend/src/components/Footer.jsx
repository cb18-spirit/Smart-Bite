import React from 'react';
import './Footer.css'; // Adjust the path if needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-branding">
        <img src="./assets/smartbite-logo.jpg" alt="SmartBite Logo" />
        <p>© 2025 SmartBite Ltd. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">For Restaurants</a></li>
          <li><a href="#">Partner With Us</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Help & Support</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Report a Fraud</a></li>
        </ul>
      </div>

      <div className="write-to-us">
        <a href="mailto:support@smartbite.com">✉️ Write to Us</a>
      </div>
    </footer>
  );
}

export default Footer;

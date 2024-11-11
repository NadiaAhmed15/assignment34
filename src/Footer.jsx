import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-container">
      <div class="footer-section">
        <h3>Features</h3>
        <ul>
          <li><a href="#">Cool stuff</a></li>
          <li><a href="#">Random feature</a></li>
          <li><a href="#">Team feature</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="#">Resource</a></li>
          <li><a href="#">Resource name</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>About</h3>
        <ul>
          <li><a href="#">Team</a></li>
          <li><a href="#">Locations</a></li>
        </ul>
      </div>
      


      </div>
    </footer>
  );
};

export default Footer;

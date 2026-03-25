import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="support">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>AULA.</h2>
            <p className="feature-desc" style={{ maxWidth: '300px' }}>
              Elevate your workspace with precision engineering and uncompromising aesthetics.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Products</h4>
              <ul>
                <li><a href="#">AULA F75</a></li>
                <li><a href="#">Keycaps</a></li>
                <li><a href="#">Switches</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Download Drivers</a></li>
                <li><a href="#">User Manuals</a></li>
                <li><a href="#">Warranty</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Twitter/X</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; 2026 AULA Keyboard. All rights reserved.
          </div>
          <div className="legal">
            <span style={{ marginRight: '20px' }}><a href="#">Privacy Policy</a></span>
            <span><a href="#">Terms of Service</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

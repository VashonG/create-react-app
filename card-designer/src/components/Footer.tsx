// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="cdt__footer" role="contentinfo">
      <div className="cdt__container">
        <div className="cdt__footerContent">
          <p>&copy; 2023 Company Name. All Rights Reserved.</p>
          <ul className="cdt__footerNav">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

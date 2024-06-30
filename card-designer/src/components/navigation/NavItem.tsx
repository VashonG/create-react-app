import React from 'react';

interface NavItemProps {
  icon: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text }) => (
  <li className="cdt__navItem" role="tab">
    <i className={icon}>
      {/* SVG content here */}
    </i>
    <p>{text}</p>
  </li>
);

export default NavItem;

// Navigation.tsx
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <div className="cdt__navTabs" role="tablist" aria-label="Navigation Tabs">
      <ul className="cdt__navList">
        <NavItem icon="icon-navStepByStep" text="Step by Step" />
        <NavItem icon="icon-navVideo" text="Video" />
        <NavItem icon="icon-navFAQ" text="FAQ" />
      </ul>
    </div>
  );
};

const NavItem: React.FC<{ icon: string, text: string }> = ({ icon, text }) => (
  <li className="cdt__navItem" role="tab">
    <i className={icon}>
      {/* SVG content here */}
    </i>
    <p>{text}</p>
  </li>
);

export default Navigation;

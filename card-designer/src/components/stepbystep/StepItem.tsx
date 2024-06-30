import React from 'react';

interface StepItemProps {
  number: number;
  text: string;
  active?: boolean;
}

const StepItem: React.FC<StepItemProps> = ({ number, text, active }) => (
  <li>
    <div className={`cdt__stepItem ${active ? 'active' : ''}`}>
      <div className="cdt__stepItemNum">
        <span>{number.toString().padStart(2, '0')}</span>
      </div>
      <div className="cdt__stepItemTitle">
        <span>{text}</span>
      </div>
    </div>
  </li>
);

export default StepItem;

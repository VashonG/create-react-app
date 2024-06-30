import React from 'react';
import StepItem from './StepItem';

const Steps: React.FC = () => {
  const steps = [
    "Select Your Region",
    "Select Your Product",
    "Select Your Card Process",
    "Card Options",
    "Review and Submit"
  ];

  return (
    <div className="cdt__steps">
      <ul>
        {steps.map((step, index) => (
          <StepItem key={index} number={index + 1} text={step} active={index === 0} />
        ))}
      </ul>
    </div>
  );
};

export default Steps;

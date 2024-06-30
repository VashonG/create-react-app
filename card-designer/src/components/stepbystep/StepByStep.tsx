// StepByStep.tsx
import React from 'react';

const StepByStep: React.FC = () => {
  return (
    <div className="cdt__navTabsStepByStep">
      <div className="cdt__navTabsContent">
        <Steps />
        <StartButton />
      </div>
    </div>
  );
};

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

const StepItem: React.FC<{ number: number, text: string, active?: boolean }> = ({ number, text, active }) => (
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

const StartButton: React.FC = () => (
  <div className="cdt__startBtn">
    <div className="cdt__button cdt__buttonStart" role="button" tabIndex={0} aria-labelledby="btnStart--text">
      <span id="btnStart--text">Start</span>
    </div>
  </div>
);

export default StepByStep;

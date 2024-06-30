import React from 'react';

const StartButton: React.FC = () => (
  <div className="cdt__startBtn">
    <div className="cdt__button cdt__buttonStart" role="button" tabIndex={0} aria-labelledby="btnStart--text">
      <span id="btnStart--text">Start</span>
    </div>
  </div>
);

export default StartButton;

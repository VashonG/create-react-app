// App.tsx
import React from 'react';
import MainLayout from './components//MainLayout';
import Navigation from './components/navigation/Navigation';
import StepByStep from './components/stepbystep/StepByStep';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <MainLayout>
      <section className="cdt__container">
        <div className="cdt__cardDesignerContainer">
          <div className="cdt__cardDesignerWrapper">
            <div className="cdt__nav">
              <Navigation />
              <div className="cdt__navTabsContent" aria-live="polite">
                <StepByStep />
              </div>
            </div>
            <div className="cdt__bottomModule">
              <div className="cdt__button cdt__buttonBack" role="button" tabIndex={0} aria-labelledby="btnBack--text">
                <span id="btnBack--text">Back</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </MainLayout>
  );
};

export default App;

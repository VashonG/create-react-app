// src/App.tsx
import React from 'react';
import Loan from './components/LoanWidget/LoanWidget';
import ThemeToggle from './components/Toggles/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App flex min-h-screen">
        <div className="left-side flex flex-col items-center justify-center fixed left-0 top-0 bottom-0 p-4 bg-gray-100 w-1/2 overflow-y-auto">
          <ThemeToggle />
          <div className="mt-4">
          </div>
        </div>
        <div className="right-side flex items-center justify-center fixed right-0 top-0 bottom-0 w-1/2">
          <Loan />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
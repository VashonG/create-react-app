// src/App.tsx
import React, { useState } from 'react';
import Loan from './components/LoanWidget/LoanWidget';
import ThemeToggle from './components/Toggles/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import HubSpotFormButton from './components/Form/Form';
import IconUploader from './components/IconUploader/IconUploader';
import RadiusControl from './components/RadiusController/RadiusController'; // Import the RadiusControl component

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('https://vashong.github.io/widgets/images/icons/credit%20score%20(2).svg');
  const [radius, setRadius] = useState<number>(0); // State for the radius

  const handleImageUpload = (newImageUrl: string) => {
    setImageUrl(newImageUrl);
  };

  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius);
  };

  return (
    <ThemeProvider>
      <div className="App flex min-h-screen">
        <div className="left-side flex flex-col items-center justify-center fixed left-0 top-0 bottom-0 p-4 bg-gray-100 w-1/2 overflow-y-auto" 
              style={{
                '--color': 'rgba(114, 114, 114, 0.3)',
                backgroundImage: 'linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent), linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent)',
                backgroundSize: '55px 55px'
              } as React.CSSProperties}>
          <div className="p-9 w-[300px] rounded-lg border dark:border-gray-800 flex justify-center items-center">
            <ThemeToggle />
          </div>
          <br />
          <div className="p-9 w-[300px] rounded-lg border dark:border-gray-800 flex justify-center items-center">
            <IconUploader onImageUpload={handleImageUpload} />
          </div>
          <br />
          <div className="p-9 w-[300px] rounded-lg border dark:border-gray-800 flex justify-center items-center">
            <RadiusControl onChange={handleRadiusChange} />
          </div>
          <br />
          <div className="p-9 w-[300px] rounded-lg border dark:border-gray-800 flex justify-center items-center">
            <HubSpotFormButton />
          </div>
          <br />
        </div>
        <div className="right-side flex items-center justify-center fixed right-0 top-0 bottom-0 w-1/2">
          <Loan imageUrl={imageUrl} radius={radius} />
        </div>
      </div>
    </ThemeProvider>

  );
};

export default App;

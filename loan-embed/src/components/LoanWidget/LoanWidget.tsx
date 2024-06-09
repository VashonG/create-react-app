// src/components/LoanWidget/LoanWidget.tsx
import React from 'react';
import { motion } from 'framer-motion';
import RowOfCards from './RowOfCards';
import { useTheme } from '../../context/ThemeContext';
import styled from 'styled-components';
import HubSpotForm from '../Form/Form';

const LoanWrapper = styled.div<{ themeType: string }>`
  background-color: ${({ themeType }) => (themeType === 'dark' ? 'white' : 'transparent')}; 
  color: ${({ themeType }) => (themeType === 'dark' ? 'black' : 'white')};
  min-height: 100vh;
  min-width: 100vw;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 1;
`;

const Card = styled(motion.div)<{ themeType: string; radius: number }>` // Update the Card styled component
  background-color: ${({ themeType }) => (themeType === 'dark' ? '#1d1d1d' : '#f8f8f8')};
  color: ${({ themeType }) => (themeType === 'dark' ? 'white' : 'black')};
  border-radius: ${({ radius }) => radius}px; // Apply the dynamic radius
`;

interface LoanProps {
  imageUrl: string;
  radius: number; // Add radius prop to LoanProps
}

const Loan: React.FC<LoanProps> = ({ imageUrl, radius }) => { // Update the component to accept radius prop
  const { theme } = useTheme();
  const themeType = theme === 'dark' ? 'light' : 'dark';

  const handleViewReport = () => {
    window.open('https://loan.aestheticscard.com', '_blank');
    console.log("View report clicked");
  };

  return (
    <>
      <LoanWrapper themeType={themeType}>
        <motion.div className="main-container p-2 md:p-3 md:px-4 max-w-[400px]">
          <div className="grid grid-cols-12 gap-3 shadow-2xl">
            <div className="col-span-12">
              <Card
                className="my-4 px-3 card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                themeType={themeType}
                radius={radius} // Pass the radius to the Card styled component
              >
                <div className="flex gap-0 py-2.5 pr-5 pl-2.5 font-semibold max-md:pr-5">
                  <div className="flex flex-auto gap-4 text-sm leading-5">
                    <img
                      loading="lazy"
                      src={imageUrl}  // Use the dynamic imageUrl
                      alt="Credit score icon"
                      className="shrink-0 w-15 aspect-square"
                    />
                    <div className="flex-auto my-auto" style={{ color: themeType === 'dark' ? 'white' : 'black' }}>
                      Your Offers
                    </div>
                  </div>
                  <motion.button
                    className="px-3 py-1 text-xs leading-4 whitespace-nowrap bg-white rounded-md shadow-lg text-indigo-950"
                    onClick={handleViewReport}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Apply For Capital
                  </motion.button>
                </div>
                <RowOfCards />
                <br />
              </Card>
            </div>
          </div>
        </motion.div>
      </LoanWrapper>
      <HubSpotForm />
    </>
  );
};

export default Loan;

// src/components/LoanWidget/LoanWidget.tsx
import React from 'react';
import { motion } from 'framer-motion';
import RowOfCards from './RowOfCards';
import { useTheme } from '../../context/ThemeContext';
import styled from 'styled-components';

const LoanWrapper = styled.div<{ themeType: string }>`
  background-color: ${({ themeType }) => (themeType === 'dark' ? 'white' : 'transparent')}; /* Change background color */
  color: ${({ themeType }) => (themeType === 'dark' ? 'black' : 'white')};
  min-height: 100vh;
  min-width: 100vw; /* Set a minimum width to cover half of the viewport */
  padding: 20px;
  max-width: 400px;
  width: 100%;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%); /* Center the component vertically */
  z-index: 1; /* Ensure the Loan component stays above other content */
`;

const Card = styled(motion.div)<{ themeType: string }>`
  background-color: ${({ themeType }) => (themeType === 'dark' ? '#1d1d1d' : '#f8f8f8')};
  color: ${({ themeType }) => (themeType === 'dark' ? 'white' : 'black')};
`;

const Loan: React.FC = () => {
  const { theme } = useTheme();
  const themeType = theme === 'dark' ? 'light' : 'dark';

  const handleViewReport = () => {
    window.open('https://loan.aestheticscard.com', '_blank');
    console.log("View report clicked");
  };

  return (
    <LoanWrapper themeType={themeType}>
      <motion.div className="main-container p-2 md:p-3 md:px-4 max-w-[400px]">
        <div className="grid grid-cols-12 gap-3 shadow-2xl">
          <div className="col-span-12">
            <Card
              className="rounded-xl my-4 px-3 card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              themeType={themeType}
            >
              <div className="flex gap-0 py-2.5 pr-5 pl-2.5 font-semibold max-md:pr-5">
                <div className="flex flex-auto gap-4 text-sm leading-5">
                  <img
                    loading="lazy"
                    src="https://vashong.github.io/widgets/images/icons/credit%20score%20(2).svg"
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
              <br/>
            </Card>
          </div>
        </div>
      </motion.div>
    </LoanWrapper>
  );
};

export default Loan;
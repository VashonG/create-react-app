import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="cdt__mainSection">
      {children}
    </main>
  );
};

export default MainLayout;

import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="pt-16 h-screen">
        <main className="h-[calc(100vh-4rem)] bg-gray-100 p-4">
          <div className="h-full flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
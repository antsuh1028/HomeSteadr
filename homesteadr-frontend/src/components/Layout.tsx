import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-full flex-col " id="layout">
      <div className="">
        <main className="h-[calc(100vh-18rem)]">
          {" "}
          {/* Adjusted padding-top */}
          <div className="flex flex-col">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;

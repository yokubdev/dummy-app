import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar.tsx';

export const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;

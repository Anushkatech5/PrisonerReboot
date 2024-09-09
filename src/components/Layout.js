// src/components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import TopMenu from './TopMenu';

const Layout = ({ children }) => {
  return (
    <div className="flex gap-4 px-4 py-6">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopMenu />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

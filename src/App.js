// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopMenu from './components/TopMenu';
import SecondPopUp from './pages/SecondPopUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SecondPopUp />} />
      <Route
        path="/dashboard"
        element={
          <div className="flex gap-4 px-4 py-6">
            <Sidebar />
            <div className="flex flex-col flex-grow">
              <TopMenu />
              {/* Add your main content here */}
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;

import React, { useState } from "react";
import { FaHome, FaBookOpen, FaUserCircle } from "react-icons/fa";

const TopMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="top-menu bg-[rgba(255,255,255,0.7)] rounded-xl shadow-lg p-4 mb-8 flex justify-between items-center">
      {/* Left Section: Welcome Text */}
      <h2 className="text-lg font-medium text-gray-500">Welcome, $prisonerName 👋</h2>

      {/* Right Section: Menu Buttons and Profile Icon */}
      <div className="relative flex items-center space-x-4">
        {/* Home Button */}
        <a href="#" className="flex items-center bg-[#71c7ec] text-white p-3 rounded-lg transition">
          <FaHome className="h-6 w-6 mr-2" />
          <span className="text-lg">Home Page</span>
        </a>

        {/* My Learnings Button */}
        <a href="#" className="flex items-center bg-[#71c7ec] text-white p-3 rounded-lg transition">
          <FaBookOpen className="h-6 w-6 mr-2" />
          <span className="text-lg">My Learnings</span>
        </a>

        {/* Profile Icon */}
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <FaUserCircle className="h-8 w-8 text-blue-500 cursor-pointer" />

          {isDropdownOpen && (
            <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg w-48 py-2">
              <div className="px-4 py-2 border-b border-gray-300">
                <span className="text-gray-700 font-semibold">Prisoner ID:</span>
                <span className="text-blue-800 font-semibold"> 12345</span> {/* Dark tone color */}
              </div>
              <div className="px-4 py-2 border-b border-gray-300">
                <span className="text-gray-700 font-semibold">Prisoner Name:</span>
                <span className="text-blue-800 font-semibold"> John Doe</span> {/* Dark tone color */}
              </div>
              <div className="px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-100">Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopMenu;

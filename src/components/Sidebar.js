import React from "react";
import { FaInfoCircle, FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between h-screen mr-4">
      {/* Sidebar Top Content */}
      <div>
        {/* Logo/Title */}
        <div className="p-6 text-center bg-[#71c7ec] rounded-t-xl">
          <h1 className="text-white text-lg font-bold">PrisonerReboot</h1>
        </div>

        {/* Navigation Menu */}
        <div className="p-4">
          {/* Dashboard */}
          <div className="sidebar-item active text-center font-bold">
            <span>Dashboard</span>
          </div>

          {/* Skill Enrolled */}
          <div className="sidebar-item mt-4 text-black font-semibold">
            <span>Skill Enrolled:</span>
            <span id="courseEnrolled" className="text-blue-800 font-semibold"> Pottery</span>
            <div className="w-full bg-[#b1d4ea] rounded-full mt-2">
              <div className="bg-[#1f4e79] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: "60%" }}> 60% </div>
            </div>
          </div>

          {/* Course Enrolled */}
          <div className="sidebar-item mt-4 text-black font-semibold">
            <span>Course Enrolled:</span>
            <span id="courseEnrolled" className="text-blue-800 font-semibold"> JavaScript</span>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer border-t border-gray-300 p-4">
        <div className="sidebar-footer-item flex items-center hover:bg-gray-200 rounded-lg p-2">
          <FaInfoCircle className="h-6 w-6" />
          <span className="ml-2">About</span>
        </div>
        <div className="sidebar-footer-item flex items-center hover:bg-gray-200 rounded-lg p-2 mt-2">
          <FaUserCircle className="h-6 w-6" />
          <span className="ml-2">Greetings</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

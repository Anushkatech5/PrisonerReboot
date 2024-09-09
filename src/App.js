import React from "react";
import Sidebar from "./components/Sidebar";
import TopMenu from "./components/TopMenu";

function App() {
  return (
    <div className="flex gap-4 px-4 py-6">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopMenu />
        {/* Add your main content here */}
      </div>
    </div>
  );
}

export default App;

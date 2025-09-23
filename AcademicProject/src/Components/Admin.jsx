import React from "react";
import { useNavigate } from "react-router-dom";


function Admin() {
const navigate = useNavigate();
function btn()
   {
     navigate("/Dashboard")
   }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-6">Admin Panel</h2>
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-indigo-600 cursor-pointer" onClick={btn}>Dashboard</li>
            <li className="p-4 hover:bg-indigo-600 cursor-pointer">User Management</li>
            <li className="p-4 hover:bg-indigo-600 cursor-pointer">Content</li>
            <li className="p-4 hover:bg-indigo-600 cursor-pointer">Analytics</li>
            <li className="p-4 hover:bg-indigo-600 cursor-pointer">Events</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Student Community Dashboard</h1>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>

        {/* Cards */}
       
      </main>
    </div>
  );
}

export default Admin;

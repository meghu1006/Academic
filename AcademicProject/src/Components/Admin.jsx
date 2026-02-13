import React from "react";
import { useNavigate } from "react-router-dom";


function Admin() {
  const navigate = useNavigate();
  function btn() {
    navigate("/Dashboard")
  }
  function btn1() {
    navigate("/User Management")
  }
  function handleLogout() {
    
    localStorage.removeItem("token");
   
    navigate("/admin-login");
  }
  



  return (
    <div className="flex h-screen bg-gray-100">
      
      <div className="w-64 bg-indigo-700 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-6">Admin Panel</h2>
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-indigo-600 cursor-pointer" onClick={btn}>Dashboard</li>
            <li className="p-4 hover:bg-indigo-600 cursor-pointer" onClick={btn1}>User Management</li>
            
          </ul>
        </nav>
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-blue-500 hover:bg-red-600 text-white py-1 rounded-lg font-semibold">Logout
          </button>
        </div>
      </div>

     
      <main className="flex-1 p-6 overflow-y-auto">
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Student Community Dashboard</h1>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>

        

      </main>
    </div>
  );
}

export default Admin;
